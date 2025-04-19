"use client";

import React from "react";
import { WhiteBlock } from "@/components/shared-components/white-box";
import { Input, Textarea } from "@/components/ui";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "@/components/form/error-text";
import { ClearButton } from "@/components/form/clear-button";

interface Props {
  className?: string;
}

export const AddressForm: React.FC<Props> = ({ className }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const onClick = () => {
    setValue("address", "", { shouldValidate: true });
  };
  const value = watch("address");
  const errorText = errors["address"]?.message?.toString();

  return (
    <WhiteBlock title={"3. Delivery address"}>
      <div className={"flex flex-col gap-5"}>
        <div className={"relative"}>
          <div className={"relative"}>
            <Input {...register("address")} className={"h-12 text-md rounded-sm"}
                   placeholder={"Your address for delivery"} />
            {value && <ClearButton onClick={onClick}></ClearButton>}
          </div>
          {errorText && <ErrorText text={errorText} className={"mt-2"} />}
        </div>
        <Textarea rows={5} className={"text-base"} placeholder={"Your comment to the order..."}></Textarea>
      </div>
    </WhiteBlock>
  )
    ;
};