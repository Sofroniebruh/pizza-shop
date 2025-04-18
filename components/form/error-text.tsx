import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  text: string;
}

export const ErrorText = ({ className, text }: Props) => {
  return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};