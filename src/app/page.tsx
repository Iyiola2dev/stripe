import { PageBackground } from "@/components/layout/PageBackground";
import { CheckoutFlow } from "@/components/CheckoutFlow";

export default function HomePage() {
  return (
    <>
      <PageBackground />
      <div className="relative z-[1] min-h-screen flex items-center justify-center px-2 md:px-6 py-6 md:py-12">
        <CheckoutFlow publishableKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!} />
      </div>
    </>
  );
}
