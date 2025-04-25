import { API } from "@/lib/services/api_client";
import { PROCESS_ORDER } from "@/app/api/actions";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export const GetStatus = (id: string) => {
  const [isProcessed, setIsProcessed] = useState<"paid" | "unpaid" | "pending">(
    "pending",
  );

  const getStatus = async () => {
    try {
      const order = await API.orders.GET_ORDER(id);

      if (!order || !order.paymentId) {
        throw new Error("No orders or Payment id provided!");
      }
      const response = await API.checkout.CHECK_PAYMENT_STATUS(order.paymentId);
      switch (response.payment_status) {
        case "paid":
          setIsProcessed("paid");
          await PROCESS_ORDER(id);
          toast.success("Successfully processed!");
          break;
        case "unpaid":
          setIsProcessed("unpaid");
          toast.error("Processing failed!");
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return isProcessed;
};
