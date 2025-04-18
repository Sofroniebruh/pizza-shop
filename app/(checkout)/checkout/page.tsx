import Common from "@/components/shared-components/common";
import { WhiteBlock } from "@/components/shared-components/white-box";
import { Button, Input, Textarea } from "@/components/ui";
import CheckOut from "@/components/shared-components/checkout-items-details";
import { ArrowRightIcon, BoxIcon, PercentIcon, TruckIcon } from "lucide-react";
import { CheckoutItem } from "@/components/shared-components/checkout-item";

export default function Checkout() {
  return (
    <Common className={"mt-10"}>
      <h1 className={"text-3xl font-semibold mb-8"}>Order</h1>
      <div className={"flex gap-10"}>
        <div className={"flex flex-col gap-10 flex-1 mb-20"}>
          <WhiteBlock title={"1. Cart"}>
            <div className={"flex flex-col gap-5"}>
              <CheckoutItem id={1} imageUrl={"/shawarma2.png"} details={"qqqqqq"} name={"qq"} price={12}
                            quantity={1}></CheckoutItem>
              <CheckoutItem id={1} imageUrl={"/shawarma2.png"} details={"qqqqqq"} name={"qq"} price={12}
                            quantity={1}></CheckoutItem>
            </div>
          </WhiteBlock>
          <WhiteBlock title={"2. Personal details"}>
            <div className={"grid gap-5 grid-cols-2"}>
              <Input name={"firstName"} className={"text-base rounded-sm"} placeholder={"First name"}></Input>
              <Input name={"lastName"} className={"text-base rounded-sm"} placeholder={"Last name"}></Input>
              <Input name={"email"} className={"text-base rounded-sm"} placeholder={"Email address"}></Input>
              <Input name={"phone"} className={"text-base rounded-sm"} placeholder={"Phone number"}></Input>
            </div>
          </WhiteBlock>
          <WhiteBlock title={"3. Delivery address"}>
            <div className={"flex flex-col gap-5"}>
              <Input name={"address"} className={"text-base rounded-sm"} placeholder={"Address"}></Input>
              <Textarea rows={5} className={"text-base"} placeholder={"Your comment to the order..."}></Textarea>
            </div>
          </WhiteBlock>
        </div>
        <div className={"w-[450px]"}>
          <WhiteBlock className={"p-6 sticky top-4"}>
            <div className={"flex flex-col gap-1"}>
              <span className={"text-xl"}>Total:</span>
              <span className={"text-3xl font-extrabold"}>39.98 &#8364;</span>
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
            } value={"2.99"}></CheckOut>
            <CheckOut title={
              <div className={"flex items-center justify-center"}>
                <TruckIcon size={16} className={"text-neutral-400 mr-2"}></TruckIcon>
                <p>Delivery: </p>
              </div>
            } value={"1.99"}></CheckOut>
            <Button type="submit" className={"w-full h-14 rounded-sm mt-6 text-base font-bold cursor-pointer"}>
              Checkout
              <ArrowRightIcon className={"w-5 ml-2"}></ArrowRightIcon>
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Common>
  )
    ;
};