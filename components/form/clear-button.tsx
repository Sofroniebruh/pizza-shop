import { XIcon } from "lucide-react";

interface Props {
  onClick?: VoidFunction;
}

export const ClearButton = ({ onClick }: Props) => {
  return (
    <button
      className={"absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"}
      onClick={onClick}
    >
      <XIcon className={"h-5 w-5"}></XIcon>
    </button>
  );
};