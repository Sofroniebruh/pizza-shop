"use client";

import React from "react";
import { WhiteBlock } from "@/components/shared-components/white-box";
import { Input, Textarea } from "@/components/ui";

interface Props {
  className?: string;
}

export const AddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title={"3. Delivery address"}>
      <div className={"flex flex-col gap-5"}>
        <Input name={"address"} className={"text-base rounded-sm"} placeholder={"Address"}></Input>
        <Textarea rows={5} className={"text-base"} placeholder={"Your comment to the order..."}></Textarea>
      </div>
    </WhiteBlock>
  );
};