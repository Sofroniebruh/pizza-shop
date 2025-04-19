import { cn } from "@/lib/utils";
import { RequiredSymbol } from "@/components/form/required-symbol";
import { Input } from "@/components/ui";
import { ErrorText } from "@/components/form/error-text";
import React from "react";
import { ClearButton } from "@/components/form/clear-button";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label?: string,
  required?: boolean,
  className?: string,
}

export const FormInput = ({ name, className, label, required, ...props }: Props) => {
  return (
    <div className={cn(className)}>
      {label && (
        <p className={"font-medium mb2-"}>{label} {required && <RequiredSymbol />}</p>
      )}
      <div className={"relative"}>
        <Input className={"h-12 text-md rounded-sm"} {...props} />
        <ClearButton></ClearButton>
      </div>

      <ErrorText text={"Field is required"} className={"mt-2"} />
    </div>
  );
};