"use client";

import Common from "@/components/shared-components/common";
import { UseCart } from "@/components/hooks/use-cart";
import { FormProvider, useForm } from "react-hook-form";
import { CheckoutFormSchema, checkoutFormSchema } from "@/components/form/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartForm } from "@/components/form/cart-form";
import { PersonalDetails } from "@/components/form/personal-details-form";
import { AddressForm } from "@/components/form/address-form";
import { WhiteBoxSide } from "@/components/shared-components/white-box-side";

export default function Checkout() {
  const { removeCartItem, items, updateItemQuantity, totalAmount, loading } = UseCart();
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

  const onClickCountButton = (id: number, quantity: number, type: "plus" | "minus") => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const onSubmit = (data: CheckoutFormSchema) => {
    console.log(data);
  };

  return (
    <Common className={"mt-10"}>
      <h1 className={"text-3xl font-semibold mb-8"}>Order</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={"flex gap-10"}>
            <div className={"flex flex-col gap-10 flex-1 mb-20"}>
              <CartForm loading={loading} items={items}
                        onClickCountButton={onClickCountButton} removeCartItem={removeCartItem} />
              <PersonalDetails className={loading ? "opacity-40 pointer-events-none" : ""} />
              <AddressForm className={loading ? "opacity-40 pointer-events-none" : ""} />
            </div>
            <div className={"w-[450px]"}>
              <WhiteBoxSide total={totalAmount} loading={loading}></WhiteBoxSide>
            </div>
          </div>
        </form>
      </FormProvider>
    </Common>
  )
    ;
};