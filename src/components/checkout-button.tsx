"use client";

import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import { useState } from "react";

import {
  commerceFunctionsBase,
  type ProductSlug,
} from "@/lib/commerce";
import { cn } from "@/lib/utils";

type CheckoutButtonProps = {
  productSlug: ProductSlug;
  label: string;
  className?: string;
};

export function CheckoutButton({
  productSlug,
  label,
  className,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${commerceFunctionsBase}/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_slug: productSlug }),
      });
      const checkout = (await response.json()) as {
        checkout_url?: string;
        error?: string;
      };

      if (!response.ok || !checkout.checkout_url) {
        throw new Error(
          checkout.error ?? "Checkout is temporarily unavailable.",
        );
      }

      window.location.assign(checkout.checkout_url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Checkout is temporarily unavailable.",
      );
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={startCheckout}
        disabled={isLoading}
        aria-busy={isLoading}
        className={cn(
          "button-primary inline-flex min-h-14 w-full items-center justify-center gap-2 px-5 font-black disabled:cursor-wait disabled:opacity-70",
          className,
        )}
      >
        {isLoading ? (
          <CircleNotch aria-hidden="true" className="size-5" weight="bold" />
        ) : (
          <ArrowRight aria-hidden="true" className="size-5" weight="bold" />
        )}
        {isLoading ? "Opening secure checkout..." : label}
      </button>
      {error ? (
        <p className="mt-3 text-pretty text-sm font-bold text-red-700" role="alert">
          {error} Try again or use the contact page if the problem continues.
        </p>
      ) : null}
    </div>
  );
}

