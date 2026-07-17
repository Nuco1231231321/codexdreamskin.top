"use client";

import {
  ArrowSquareOut,
  MagnifyingGlass,
  PawPrint,
  Sparkle,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { CopyCommand } from "@/components/copy-command";
import { codexPets, type PetFormat } from "@/lib/pets";
import { cn } from "@/lib/utils";

const initialVisibleCount = 18;
const formatFilters: Array<"All" | PetFormat> = ["All", "V2", "V1"];
const tagFilters = [
  "All",
  "cute",
  "anime",
  "pixel",
  "game",
  "mascot",
  "animated",
] as const;

type TagFilter = (typeof tagFilters)[number];
type SortOrder = "featured" | "name";

export function PetPicker() {
  const t = useTranslations("PetPicker");
  const [query, setQuery] = useState("");
  const [formatFilter, setFormatFilter] =
    useState<(typeof formatFilters)[number]>("All");
  const [tagFilter, setTagFilter] = useState<TagFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("featured");
  const [selectedSlug, setSelectedSlug] = useState(codexPets[0].slug);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const filteredPets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = codexPets.filter((pet) => {
      const matchesFormat =
        formatFilter === "All" || pet.format === formatFilter;
      const matchesTag =
        tagFilter === "All" || pet.tags.includes(tagFilter.toLowerCase());
      const searchText = `${pet.name} ${pet.author} ${pet.slug} ${pet.tags.join(" ")}`;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchText.toLowerCase().includes(normalizedQuery);

      return matchesFormat && matchesTag && matchesQuery;
    });

    if (sortOrder === "name") {
      return [...matches].sort((firstPet, secondPet) =>
        firstPet.name.localeCompare(secondPet.name),
      );
    }

    return matches;
  }, [formatFilter, query, sortOrder, tagFilter]);

  const selectedPet =
    codexPets.find((pet) => pet.slug === selectedSlug) ?? codexPets[0];
  const visiblePets = filteredPets.slice(0, visibleCount);
  const installCommand = `npx codex-pets add ${selectedPet.slug}`;
  const installPrompt = t("installPrompt", { command: installCommand });
  const installHref = `codex://new?prompt=${encodeURIComponent(installPrompt)}`;
  const hasMorePets = visiblePets.length < filteredPets.length;

  function resetVisibleCount() {
    setVisibleCount(initialVisibleCount);
  }

  function clearFilters() {
    setQuery("");
    setFormatFilter("All");
    setTagFilter("All");
    setSortOrder("featured");
    resetVisibleCount();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
      <div className="min-w-0">
        <div className="grid gap-4 rounded-xl border-2 border-graphite bg-[#fbfff8] p-4 sm:p-5">
          <div>
            <label
              htmlFor="pet-search"
              className="text-sm font-black text-eel-dark-blue"
            >
              {t("searchLabel")}
            </label>
            <div className="mt-2 flex min-h-12 items-center gap-2 rounded-xl border-2 border-graphite bg-white px-3 focus-within:border-action focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-eel-dark-blue">
              <MagnifyingGlass
                aria-hidden="true"
                className="size-5 shrink-0 text-ash"
                weight="bold"
              />
              <input
                id="pet-search"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  resetVisibleCount();
                }}
                placeholder={t("searchPlaceholder")}
                className="min-w-0 flex-1 bg-transparent py-2 font-bold text-eel-dark-blue outline-none placeholder:text-ash"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[auto_1fr_1fr] sm:items-end">
            <fieldset>
              <legend className="text-sm font-black text-eel-dark-blue">
                {t("format")}
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {formatFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={formatFilter === filter}
                    onClick={() => {
                      setFormatFilter(filter);
                      resetVisibleCount();
                    }}
                    className="pet-filter min-h-11 rounded-xl border-2 border-graphite px-3 text-sm font-black text-charcoal"
                  >
                    {filter === "All" ? t("all") : filter}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-2">
              <label
                htmlFor="pet-tag-filter"
                className="text-sm font-black text-eel-dark-blue"
              >
                {t("style")}
              </label>
              <select
                id="pet-tag-filter"
                value={tagFilter}
                onChange={(event) => {
                  setTagFilter(event.target.value as TagFilter);
                  resetVisibleCount();
                }}
                className="min-h-11 rounded-xl border-2 border-graphite bg-white px-3 font-bold text-eel-dark-blue outline-none focus:border-action focus:outline-3 focus:outline-offset-2 focus:outline-eel-dark-blue"
              >
                {tagFilters.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag === "All" ? t("allStyles") : t(`tags.${tag}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="pet-sort"
                className="text-sm font-black text-eel-dark-blue"
              >
                {t("sort")}
              </label>
              <select
                id="pet-sort"
                value={sortOrder}
                onChange={(event) => {
                  setSortOrder(event.target.value as SortOrder);
                  resetVisibleCount();
                }}
                className="min-h-11 rounded-xl border-2 border-graphite bg-white px-3 font-bold text-eel-dark-blue outline-none focus:border-action focus:outline-3 focus:outline-offset-2 focus:outline-eel-dark-blue"
              >
                <option value="featured">{t("newest")}</option>
                <option value="name">{t("nameSort")}</option>
              </select>
            </div>
          </div>
        </div>

        <p
          aria-live="polite"
          className="mt-4 text-sm font-bold tabular-nums text-ash"
        >
          {t("results", { visible: visiblePets.length, filtered: filteredPets.length, total: codexPets.length })}
        </p>

        {filteredPets.length > 0 ? (
          <>
            <div
              id="pet-results"
              className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3"
            >
              {visiblePets.map((pet) => {
                const isSelected = selectedPet.slug === pet.slug;

                return (
                  <article
                    key={pet.slug}
                    id={pet.slug}
                    className={cn(
                      "rounded-xl border-2 border-b-[6px] bg-white p-2.5",
                      isSelected
                        ? "border-action bg-[#fbfff8]"
                        : "border-graphite",
                    )}
                  >
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedSlug(pet.slug)}
                      className="group grid w-full gap-3 text-left"
                    >
                      <span className="grid min-h-[132px] place-items-center rounded-xl border-2 border-eel-light bg-[#f7fbf4] p-2 group-hover:border-action sm:min-h-[150px]">
                        <Image
                          src={pet.image}
                          alt=""
                          width={192}
                          height={208}
                          sizes="(max-width: 639px) 42vw, (max-width: 1279px) 220px, 190px"
                          className="max-h-[128px] w-auto object-contain sm:max-h-[144px]"
                        />
                      </span>
                      <span className="min-w-0 px-1 pb-1">
                        <span className="flex items-start justify-between gap-2">
                          <span className="line-clamp-2 text-base font-black leading-5 text-eel-dark-blue sm:text-lg sm:leading-6">
                            {pet.name}
                          </span>
                          {isSelected ? (
                            <Sparkle
                              aria-hidden="true"
                              className="mt-0.5 size-5 shrink-0 text-action"
                              weight="fill"
                            />
                          ) : null}
                        </span>
                        <span className="mt-1 block truncate text-xs font-extrabold text-ash">
                          {t("by", { author: pet.author })}
                        </span>
                        <span className="mt-2 block text-xs font-black text-link">
                          {pet.format}
                          {pet.tags.length > 0
                            ? ` | ${pet.tags.slice(0, 2).join(", ")}`
                            : ` | ${t("communityPet")}`}
                        </span>
                      </span>
                    </button>
                  </article>
                );
              })}
            </div>

            {hasMorePets ? (
              <button
                type="button"
                onClick={() => setVisibleCount(filteredPets.length)}
                className="button-secondary mx-auto mt-8 flex min-h-12 items-center justify-center px-6 font-black"
              >
                {t("showMore", { count: filteredPets.length - visiblePets.length })}
              </button>
            ) : null}
          </>
        ) : (
          <div className="mt-5 rounded-xl border-2 border-graphite p-8 text-center">
            <PawPrint
              aria-hidden="true"
              className="mx-auto size-11 text-action"
              weight="fill"
            />
            <h3 className="mt-4 text-balance text-2xl font-black text-eel-dark-blue">
              {t("emptyTitle")}
            </h3>
            <p className="mt-2 text-pretty text-charcoal">
              {t("emptyBody")}
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="button-secondary mt-5 inline-flex min-h-12 items-center justify-center px-5 text-sm font-extrabold"
            >
              {t("showAll")}
            </button>
          </div>
        )}
      </div>

      <aside
        aria-label={t("selectedAria")}
        className="order-first min-w-0 rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-5 sm:p-6 lg:order-none lg:sticky lg:top-24"
      >
        <div className="grid place-items-center rounded-xl border-2 border-action bg-white p-4">
          <Image
            src={selectedPet.image}
            alt={t("selectedAlt", { name: selectedPet.name })}
            width={192}
            height={208}
            sizes="192px"
            className="h-[208px] w-[192px] object-contain"
          />
        </div>
        <p className="mt-5 text-sm font-black text-link">
          {t("selectedMeta", { format: selectedPet.format, author: selectedPet.author })}
        </p>
        <h3 className="mt-1 text-balance text-3xl font-black text-eel-dark-blue">
          {selectedPet.name}
        </h3>
        <p className="mt-3 text-pretty leading-7 text-eel-dark-blue">
          {t("selectedBody", { slug: selectedPet.slug })}
        </p>

        <a
          href={installHref}
          className="button-primary mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 px-5 text-center font-black"
        >
          <PawPrint aria-hidden="true" className="size-5" weight="fill" />
          {t("install")}
        </a>

        <div className="mt-5 min-w-0">
          <p className="mb-2 text-sm font-black text-eel-dark-blue">
            {t("terminal")}
          </p>
          <pre className="min-w-0 max-w-full overflow-x-auto rounded-xl border-2 border-graphite bg-white p-4 font-mono text-sm leading-6 text-eel-dark-blue">
            <code>{installCommand}</code>
          </pre>
          <CopyCommand
            command={installCommand}
            label={t("copy")}
            className="mt-3"
          />
        </div>

        <a
          href={selectedPet.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
        >
          {t("review")}
          <ArrowSquareOut aria-hidden="true" className="size-4" weight="bold" />
        </a>
      </aside>
    </div>
  );
}
