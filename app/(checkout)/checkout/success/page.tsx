"use client";

import Common from "@/components/shared-components/common";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LoaderCircleIcon } from "lucide-react";
import { GetStatus } from "@/lib/getStatus";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    throw new Error("ID is missing");
  }

  const isProcessed = GetStatus(id);

  return (
    <Common className={"min-h-screen flex items-center justify-center"}>
      <div
        className={
          "flex items-center flex-col justify-center p-6 rounded-md bg-white shadow-sm gap-6"
        }
      >
        {isProcessed === "paid" ? (
          <>
            <div className={"flex items-center flex-col justify-center"}>
              <h1 className={"text-xl font-semibold mb-1"}>
                Your order has been processed successfully.
              </h1>
              <p className={"text-base"}>
                You will receive a confirmation letter soon.
              </p>
            </div>
            <Link href={"/"}>
              <Button className={"text-base cursor-pointer"} size={"lg"}>
                Got it
              </Button>
            </Link>
          </>
        ) : isProcessed === "unpaid" ? (
          <>
            <div className={"flex items-center flex-col justify-center"}>
              <h1 className={"text-xl font-semibold mb-1"}>
                Your order was not processed successfully.
              </h1>
              <p className={"text-base"}>You will receive a letter soon.</p>
            </div>
            <Link href={"/"}>
              <Button className={"text-base cursor-pointer"} size={"lg"}>
                Got it
              </Button>
            </Link>
          </>
        ) : (
          <div className={"flex items-center flex-col justify-center gap-4"}>
            <h1 className={"text-xl font-semibold"}>Processing Your order</h1>
            <LoaderCircleIcon
              className={"animate-spin w-10 h-11 text-primary"}
            ></LoaderCircleIcon>
          </div>
        )}
      </div>
    </Common>
  );
}
