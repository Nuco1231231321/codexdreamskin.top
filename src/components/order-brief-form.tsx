"use client";

import {
  CheckCircle,
  CircleNotch,
  ImageSquare,
  ShieldCheck,
} from "@phosphor-icons/react";
import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  commerceFunctionsBase,
  serviceProducts,
  type ProductSlug,
} from "@/lib/commerce";

type VerificationState =
  | { status: "checking" }
  | { status: "ready"; productSlug: ProductSlug; orderReference: string }
  | { status: "error"; message: string };

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string }
  | { status: "complete"; reference: string };

export function OrderBriefForm() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.toString();
  const [verification, setVerification] = useState<VerificationState>({
    status: "checking",
  });
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });

  useEffect(() => {
    let isCurrent = true;

    async function verifyOrder() {
      if (!rawQuery) {
        setVerification({
          status: "error",
          message: "No completed checkout was found in this link.",
        });
        return;
      }

      try {
        const response = await fetch(`${commerceFunctionsBase}/order-status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ raw_query: rawQuery }),
        });
        const result = (await response.json()) as {
          verified?: boolean;
          product_slug?: ProductSlug;
          order_reference?: string;
          error?: string;
        };

        if (
          !response.ok ||
          !result.verified ||
          !result.product_slug ||
          !result.order_reference
        ) {
          throw new Error(
            result.error ?? "The payment could not be confirmed yet.",
          );
        }

        if (isCurrent) {
          setVerification({
            status: "ready",
            productSlug: result.product_slug,
            orderReference: result.order_reference,
          });
        }
      } catch (verificationError) {
        if (isCurrent) {
          setVerification({
            status: "error",
            message:
              verificationError instanceof Error
                ? verificationError.message
                : "The payment could not be confirmed yet.",
          });
        }
      }
    }

    void verifyOrder();
    return () => {
      isCurrent = false;
    };
  }, [rawQuery]);

  async function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (verification.status !== "ready") return;

    setSubmission({ status: "submitting" });
    const form = new FormData(event.currentTarget);
    form.set("raw_query", rawQuery);
    form.set("rights_confirmed", form.has("rights_confirmed") ? "true" : "false");

    try {
      const response = await fetch(
        `${commerceFunctionsBase}/submit-skin-brief`,
        { method: "POST", body: form },
      );
      const result = (await response.json()) as {
        submitted?: boolean;
        brief_reference?: string;
        error?: string;
      };

      if (!response.ok || !result.submitted || !result.brief_reference) {
        throw new Error(result.error ?? "Your brief could not be submitted.");
      }

      setSubmission({ status: "complete", reference: result.brief_reference });
    } catch (submissionError) {
      setSubmission({
        status: "error",
        message:
          submissionError instanceof Error
            ? submissionError.message
            : "Your brief could not be submitted.",
      });
    }
  }

  if (verification.status === "checking") {
    return (
      <div className="rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-8 text-center" role="status">
        <CircleNotch aria-hidden="true" className="mx-auto size-10 text-link" weight="bold" />
        <h2 className="mt-4 text-balance text-2xl font-black text-eel-dark-blue">
          Confirming your payment
        </h2>
        <p className="mt-2 text-pretty text-charcoal">
          This normally takes only a few seconds. Keep this page open.
        </p>
      </div>
    );
  }

  if (verification.status === "error") {
    return (
      <div className="rounded-xl border-2 border-red-700 border-b-[7px] bg-red-50 p-6" role="alert">
        <h2 className="text-balance text-2xl font-black text-red-900">
          Payment confirmation needs another moment
        </h2>
        <p className="mt-3 text-pretty leading-7 text-red-900">
          {verification.message} Refresh this page after 15 seconds. If the
          message remains, use the contact page and include the address of this
          page so the order can be checked securely.
        </p>
      </div>
    );
  }

  const product = serviceProducts[verification.productSlug];
  const requiresImage =
    verification.productSlug === "custom-skin-early-access";

  if (submission.status === "complete") {
    return (
      <div className="rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-7 sm:p-9" role="status">
        <CheckCircle aria-hidden="true" className="size-14 text-link" weight="fill" />
        <h2 className="mt-5 text-balance text-3xl font-black text-eel-dark-blue">
          Your brief is in the production queue.
        </h2>
        <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">
          Reference <strong>{submission.reference}</strong>. Delivery is sent to
          the email used at checkout within 72 hours. The package includes the
          prepared configuration plus install and restore instructions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submitBrief}
      encType="multipart/form-data"
      className="rounded-xl border-2 border-graphite border-b-[7px] bg-white p-5 sm:p-8"
      aria-busy={submission.status === "submitting"}
    >
      <div className="flex flex-col gap-5 border-b-2 border-eel-light pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase text-link">Payment confirmed</p>
          <h2 className="mt-2 text-balance text-3xl font-black text-eel-dark-blue">
            {product.name}
          </h2>
          <p className="mt-2 text-sm font-bold text-ash">
            Order ending {verification.orderReference} · {product.delivery}
          </p>
        </div>
        <ShieldCheck aria-hidden="true" className="size-12 shrink-0 text-action" weight="fill" />
      </div>

      <p className="mt-6 text-pretty leading-7 text-charcoal">
        Complete one short brief. The checkout email is already connected to
        the order, so there is no account to create and no order number to copy.
      </p>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="platform" className="font-black text-eel-dark-blue">
            Codex platform
          </label>
          <select
            id="platform"
            name="platform"
            required
            defaultValue="macos"
            className="min-h-12 rounded-xl border-2 border-graphite bg-white px-3 font-bold text-eel-dark-blue outline-none focus:border-action focus:outline-3 focus:outline-offset-2 focus:outline-eel-dark-blue"
          >
            <option value="macos">macOS</option>
            <option value="windows">Windows</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="visual-direction" className="font-black text-eel-dark-blue">
            Visual direction
          </label>
          <select
            id="visual-direction"
            name="visual_direction"
            required
            defaultValue="soft"
            className="min-h-12 rounded-xl border-2 border-graphite bg-white px-3 font-bold text-eel-dark-blue outline-none focus:border-action focus:outline-3 focus:outline-offset-2 focus:outline-eel-dark-blue"
          >
            <option value="soft">Soft and calm</option>
            <option value="dark">Dark and focused</option>
            <option value="bright">Bright and playful</option>
            <option value="minimal">Minimal</option>
            <option value="surprise-me">Choose for me</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-2">
        <label htmlFor="accent-color" className="font-black text-eel-dark-blue">
          Favorite accent color <span className="font-bold text-ash">(optional)</span>
        </label>
        <input
          id="accent-color"
          name="accent_color"
          type="text"
          maxLength={40}
          placeholder="For example: forest green, warm orange, or #58CC02"
          className="min-h-12 rounded-xl border-2 border-graphite px-4 font-bold text-eel-dark-blue outline-none placeholder:text-ash focus:border-action focus:outline-3 focus:outline-offset-2 focus:outline-eel-dark-blue"
        />
      </div>

      <div className="mt-6 grid gap-2">
        <label htmlFor="skin-image" className="font-black text-eel-dark-blue">
          {requiresImage ? "Image for your custom skin" : "Background image (optional)"}
        </label>
        <div className="rounded-xl border-2 border-dashed border-graphite bg-[#fbfff8] p-5">
          <ImageSquare aria-hidden="true" className="size-9 text-action" weight="fill" />
          <input
            id="skin-image"
            name="image"
            type="file"
            accept="image/png,image/jpeg,image/webp,image/heic,image/heif"
            required={requiresImage}
            aria-describedby="skin-image-help"
            className="mt-3 block w-full text-sm font-bold text-charcoal file:mr-4 file:rounded-xl file:border-2 file:border-graphite file:bg-white file:px-4 file:py-2 file:font-black file:text-eel-dark-blue"
          />
          <p id="skin-image-help" className="mt-3 text-pretty text-sm leading-6 text-ash">
            PNG, JPEG, WebP, HEIC, or HEIF up to 15 MB. A wide image with a calm
            area behind text usually produces the clearest result.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-2">
        <label htmlFor="brief-notes" className="font-black text-eel-dark-blue">
          Anything important? <span className="font-bold text-ash">(optional)</span>
        </label>
        <textarea
          id="brief-notes"
          name="notes"
          rows={5}
          maxLength={1200}
          placeholder="Examples: keep the composer dark, avoid pink, place the subject on the right."
          className="rounded-xl border-2 border-graphite px-4 py-3 font-bold leading-6 text-eel-dark-blue outline-none placeholder:text-ash focus:border-action focus:outline-3 focus:outline-offset-2 focus:outline-eel-dark-blue"
        />
      </div>

      <label className="mt-6 flex items-start gap-3 rounded-xl border-2 border-eel-light bg-[#fbfff8] p-4 text-pretty text-sm font-bold leading-6 text-charcoal">
        <input
          type="checkbox"
          name="rights_confirmed"
          required
          className="mt-1 size-5 shrink-0 accent-[#3f9800]"
        />
        <span>
          I created or have permission to use any image I upload. If I do not
          upload an image, I authorize the use of rights-cleared or abstract
          assets only.
        </span>
      </label>

      {requiresImage ? (
        <p className="mt-4 text-pretty text-sm font-bold leading-6 text-ash">
          Early Access includes one tailored skin and no revision. It does not
          include original illustration or a license for third-party characters.
        </p>
      ) : null}

      {submission.status === "error" ? (
        <p className="mt-5 text-pretty font-bold text-red-700" role="alert">
          {submission.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submission.status === "submitting"}
        className="button-primary mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 px-6 font-black disabled:cursor-wait disabled:opacity-70"
      >
        {submission.status === "submitting" ? (
          <CircleNotch aria-hidden="true" className="size-5" weight="bold" />
        ) : (
          <CheckCircle aria-hidden="true" className="size-5" weight="fill" />
        )}
        {submission.status === "submitting" ? "Submitting securely..." : "Submit my skin brief"}
      </button>
    </form>
  );
}

