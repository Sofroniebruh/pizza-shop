"use client";

import { CancelPageElement } from "@/components/shared-components/cancel-page";
import { useSearchParams } from "next/navigation";

export default function CancelPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    throw new Error("No id was provided");
  }

  return <CancelPageElement id={id} />;
}
