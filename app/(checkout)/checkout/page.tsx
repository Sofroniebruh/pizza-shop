"use client";

import Common from "@/components/shared-components/common";
import { UseCart } from "@/components/hooks/use-cart";
import { FormProvider, useForm } from "react-hook-form";
import {
  CheckoutFormSchema,
  checkoutFormSchema,
} from "@/components/form/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartForm } from "@/components/form/cart-form";
import { PersonalDetails } from "@/components/form/personal-details-form";
import { AddressForm } from "@/components/form/address-form";
import { WhiteBoxSide } from "@/components/shared-components/white-box-side";
import { useState } from "react";
import { createOrder } from "@/app/api/actions";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
  const { removeCartItem, items, updateItemQuantity, totalAmount, loading } =
    UseCart();
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  );
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const handleCheckout = async (formData: CheckoutFormSchema) => {
    setSubmitting(true);

    try {
      const response = await createOrder(formData);

      if (!response) {
        toast.error("Error retrieving data");

        return;
      }

      const url = response.url;
      const stripe = await stripePromise;

      if (!url) {
        toast.error("No payment URL returned.");

        return;
      }

      if (!stripe) {
        toast.error("Error creating stripe");

        return;
      }

      window.location.href = url;
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Common className={"mt-10"}>
      <h1 className={"text-3xl font-semibold mb-8"}>Order</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit((data) => handleCheckout(data))}>
          <div className={"flex gap-10"}>
            <div className={"flex flex-col gap-10 flex-1 mb-20"}>
              <CartForm
                loading={loading}
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <PersonalDetails
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
              <AddressForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
            </div>
            <div className={"w-[450px]"}>
              <WhiteBoxSide
                total={totalAmount}
                loading={loading}
              ></WhiteBoxSide>
            </div>
          </div>
        </form>
      </FormProvider>
    </Common>
  );
}
