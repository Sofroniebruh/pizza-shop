import CheckOut from "@/components/shared-components/checkout-items-details";
import { ArrowRightIcon, BoxIcon, PercentIcon, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui";
import { WhiteBlock } from "@/components/shared-components/white-box";

export const WhiteBoxSide = ({ total }: { total: number }) => {
  const VAT = 15;
  const DELIVERY_PRICE = 2.99;

  const calcTotalPrice = total * VAT / 100;

  return (
    <WhiteBlock className={"p-6 sticky top-4"}>
      <div className={"flex flex-col gap-1"}>
        <span className={"text-xl"}>Total:</span>
        <span className={"text-3xl font-extrabold"}>{total} &#8364;</span>
      </div>
      <CheckOut title={
        <div className={"flex items-center justify-center"}>
          <BoxIcon size={16} className={"text-neutral-400 mr-2"}></BoxIcon>
          <p>Total cost: </p>
        </div>
      } value={"35"}></CheckOut>
      <CheckOut title={
        <div className={"flex items-center justify-center"}>
          <PercentIcon size={16} className={"text-neutral-400 mr-2"}></PercentIcon>
          <p>Vat: </p>
        </div>
      } value={`${calcTotalPrice.toFixed(2)}`}></CheckOut>
      <CheckOut title={
        <div className={"flex items-center justify-center"}>
          <TruckIcon size={16} className={"text-neutral-400 mr-2"}></TruckIcon>
          <p>Delivery: </p>
        </div>
      } value={`${DELIVERY_PRICE}`}></CheckOut>
      <Button type="submit" className={"w-full h-14 rounded-sm mt-6 text-base font-bold cursor-pointer"}>
        Checkout
        <ArrowRightIcon className={"w-5 ml-2"}></ArrowRightIcon>
      </Button>
    </WhiteBlock>
  );
};