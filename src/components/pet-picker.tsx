"use client";

import {
  ArrowSquareOut,
  MagnifyingGlass,
  PawPrint,
  Sparkle,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { CopyCommand } from "@/components/copy-command";
import { codexPets, type PetCategory } from "@/lib/pets";

const petFilters: Array<"All" | PetCategory> = [
  "All",
  "Animal",
  "Character",
  "Object",
];

export function PetPicker() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<(typeof petFilters)[number]>("All");
  const [selectedSlug, setSelectedSlug] = useState(codexPets[0].slug);

  const filteredPets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return codexPets.filter((pet) => {
      const matchesCategory =
        activeFilter === "All" || pet.category === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${pet.name} ${pet.author} ${pet.description}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeFilter, query]);

  const selectedPet =
    codexPets.find((pet) => pet.slug === selectedSlug) ?? codexPets[0];
  const installCommand = `npx codex-pets add ${selectedPet.slug}`;
  const installPrompt = `Install this pet: ${installCommand}`;
  const installHref = `codex://new?prompt=${encodeURIComponent(installPrompt)}`;

  function clearFilters() {
    setQuery("");
    setActiveFilter("All");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
      <div className="min-w-0">
        <div className="grid gap-4 rounded-xl border-2 border-graphite p-4 sm:grid-cols-[1fr_auto] sm:items-end sm:p-5">
          <div>
            <label
              htmlFor="pet-search"
              className="text-sm font-black text-eel-dark-blue"
            >
              Search the pet gallery
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
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try cat, dog, apple, or author"
                className="min-w-0 flex-1 bg-transparent py-2 font-bold text-eel-dark-blue outline-none placeholder:text-ash"
              />
            </div>
          </div>

          <div aria-label="Filter pets by type" className="flex flex-wrap gap-2">
            {petFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className="pet-filter min-h-11 rounded-xl border-2 border-graphite px-3 text-sm font-black text-charcoal"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <p aria-live="polite" className="mt-4 text-sm font-bold text-ash">
          Showing {filteredPets.length} of {codexPets.length} curated Codex pets.
        </p>

        {filteredPets.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {filteredPets.map((pet) => {
              const isSelected = selectedPet.slug === pet.slug;

              return (
                <article
                  key={pet.slug}
                  id={pet.slug}
                  className={
                    isSelected
                      ? "rounded-xl border-2 border-action border-b-[6px] bg-[#fbfff8] p-3"
                      : "rounded-xl border-2 border-graphite border-b-[6px] bg-white p-3"
                  }
                >
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    aria-label={`Select ${pet.name}`}
                    onClick={() => setSelectedSlug(pet.slug)}
                    className="group grid w-full grid-cols-[104px_1fr] gap-4 text-left"
                  >
                    <span className="grid min-h-[118px] place-items-center rounded-xl border-2 border-eel-light bg-[#f7fbf4] p-2 group-hover:border-action">
                      <Image
                        src={pet.image}
                        alt={`${pet.name} Codex desktop pet preview`}
                        width={192}
                        height={208}
                        sizes="104px"
                        className="max-h-[108px] w-auto object-contain"
                      />
                    </span>
                    <span className="min-w-0 py-1">
                      <span className="flex items-start justify-between gap-2">
                        <span className="text-lg font-black text-eel-dark-blue">
                          {pet.name}
                        </span>
                        {isSelected ? (
                          <Sparkle
                            aria-hidden="true"
                            className="mt-1 size-5 shrink-0 text-action"
                            weight="fill"
                          />
                        ) : null}
                      </span>
                      <span className="mt-1 block text-xs font-extrabold text-ash">
                        by {pet.author} | {pet.category}
                      </span>
                      <span className="mt-2 block text-pretty text-sm leading-5 text-charcoal">
                        {pet.description}
                      </span>
                    </span>
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-5 rounded-xl border-2 border-graphite p-8 text-center">
            <PawPrint
              aria-hidden="true"
              className="mx-auto size-11 text-action"
              weight="fill"
            />
            <h3 className="mt-4 text-2xl font-black text-eel-dark-blue">
              No pets match that search.
            </h3>
            <p className="mt-2 text-pretty text-charcoal">
              Clear the search and filters to return to the full desktop pet
              gallery.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="button-secondary mt-5 inline-flex min-h-12 items-center justify-center px-5 text-sm font-extrabold"
            >
              Show all pets
            </button>
          </div>
        )}
      </div>

      <aside
        aria-label="Selected Codex pet installation"
        className="min-w-0 rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-5 lg:sticky lg:top-24 sm:p-6"
      >
        <div className="grid place-items-center rounded-xl border-2 border-action bg-white p-5">
          <Image
            src={selectedPet.image}
            alt={`${selectedPet.name} selected desktop pet`}
            width={192}
            height={208}
            sizes="192px"
            className="h-[208px] w-[192px] object-contain"
          />
        </div>
        <p className="mt-5 text-sm font-black text-link">Selected pet</p>
        <h3 className="mt-1 text-balance text-3xl font-black text-eel-dark-blue">
          {selectedPet.name}
        </h3>
        <p className="mt-3 text-pretty leading-7 text-eel-dark-blue">
          {selectedPet.description} The one-click link opens Codex with a
          prepared task. Review the command before approving it.
        </p>

        <a
          href={installHref}
          className="button-primary mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 px-5 text-center font-black"
        >
          <PawPrint aria-hidden="true" className="size-5" weight="fill" />
          Install in Codex
        </a>

        <div className="mt-5 min-w-0">
          <p className="mb-2 text-sm font-black text-eel-dark-blue">
            Terminal fallback
          </p>
          <pre className="min-w-0 max-w-full overflow-x-auto rounded-xl border-2 border-graphite bg-white p-4 font-mono text-sm leading-6 text-eel-dark-blue">
            <code>{installCommand}</code>
          </pre>
          <CopyCommand
            command={installCommand}
            label="Copy CLI command"
            className="mt-3"
          />
        </div>

        <a
          href={selectedPet.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
        >
          View the original pet page
          <ArrowSquareOut aria-hidden="true" className="size-4" weight="bold" />
        </a>
      </aside>
    </div>
  );
}
