import { cn } from "@/lib/utils";
import { RequiredSymbol } from "@/components/form/required-symbol";
import { Input } from "@/components/ui";
import { ErrorText } from "@/components/form/error-text";
import React from "react";
import { ClearButton } from "@/components/form/clear-button";
import { useFormContext } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label?: string,
  required?: boolean,
  className?: string,
}

export const FormInput = ({ name, className, label, required, ...props }: Props) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message?.toString();

  const onClick = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={cn(className)}>
      {label && (
        <p className={"font-medium mb2-"}>{label} {required && <RequiredSymbol />}</p>
      )}
      <div className={"relative"}>
        <Input {...register(name)} className={"h-12 text-md rounded-sm"} {...props} />
        {value && <ClearButton onClick={onClick}></ClearButton>}
      </div>

      {errorText && <ErrorText text={errorText} className={"mt-2"} />}
    </div>
  );
};