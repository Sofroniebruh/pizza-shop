"use client";

import { useEffect } from "react";
import { cancelOrder } from "@/app/api/actions";
import { toast } from "react-hot-toast";
import Common from "@/components/shared-components/common";

export const CancelPageElement = ({ id }: { id: string }) => {
  useEffect(() => {
    try {
      cancelOrder(id);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        toast.error(err.message);

        window.location.href = "/";
      }

      console.error(err);
      toast.error("Server error");

      window.location.href = "/";
    }
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }, []);

  return (
    <Common className={"min-h-screen flex items-center justify-center"}>
      <h1 className={"text-xl font-semibold"}>
        Your order was canceled. Returning back to the main page...
      </h1>
    </Common>
  );
};
