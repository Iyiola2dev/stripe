"use client";
import { useState, useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardSurface } from "@/components/layout/CardSurface";
import { PricingView } from "@/components/views/PricingView";
import { CheckoutView } from "@/components/views/CheckoutView";
import { SuccessView } from "@/components/views/SuccessView";
import { CheckIcon } from "@/components/ui/Icon";

type Step = "pricing" | "checkout" | "loading" | "success";
const CRUMBS = ["Pricing", "Checkout", "Confirm order"] as const;

export function CheckoutFlow({ publishableKey }: { publishableKey: string }) {
  const [step, setStep] = useState<Step>("pricing");
  const [cardLast4, setCardLast4] = useState("4242");

  const stripePromise = useMemo(() => loadStripe(publishableKey), [publishableKey]);

  const handleSuccess = (last4: string) => { setCardLast4(last4); setStep("success"); };
  const handleLoadingChange = (loading: boolean) => { if (loading) setStep("loading"); };
  const reset = () => setStep("pricing");

  const crumbIdx = step === "pricing" ? 0 : step === "checkout" || step === "loading" ? 1 : 2;
  const cardWidth = step === "checkout" || step === "loading" ? "w-[860px]" : "w-[540px]";

  return (
    <div className={`${cardWidth} transition-all duration-300`}>
      <CardSurface>
        {/* breadcrumb */}
        <div className="flex items-center gap-1.5 px-8 py-4 border-b border-line text-[13px]">
          {CRUMBS.map((crumb, i) => (
            <span key={crumb} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-muted-2 mx-0.5">›</span>}
              {i < crumbIdx ? (
                <span className="flex items-center gap-1 text-good font-medium">
                  <CheckIcon size={12} color="var(--good)" /> {crumb}
                </span>
              ) : i === crumbIdx ? (
                <span className="text-accent font-semibold">{crumb}</span>
              ) : (
                <span className="text-muted-2">{crumb}</span>
              )}
            </span>
          ))}
        </div>

        {step === "pricing" && (
          <PricingView onContinue={() => setStep("checkout")} />
        )}

        {(step === "checkout" || step === "loading") && (
          <CheckoutView
            stripePromise={stripePromise}
            isLoading={step === "loading"}
            onBack={() => setStep("pricing")}
            onSuccess={handleSuccess}
            onLoadingChange={handleLoadingChange}
          />
        )}

        {step === "success" && (
          <SuccessView onContinue={reset} cardLast4={cardLast4} />
        )}
      </CardSurface>
    </div>
  );
}
