import { Metadata } from "next";
import { Suspense } from "react";
import Common from "@/components/shared-components/common";
import HeaderElement from "@/components/shared-components/header";

export const metadata: Metadata = {
  title: "PizzaStore | Checkout",
  description: "Fresh and delicious pizza",
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Common>
        <Suspense>
          <HeaderElement hasSearch={false} hasCart={false} className="border-b-gray-200" />
        </Suspense>
        {children}
      </Common>
    </main>
  );
}