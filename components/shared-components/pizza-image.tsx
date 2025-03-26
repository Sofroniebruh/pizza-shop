import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage = ({ imageUrl, size, className }: Props) => {
  return (
    <div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
      <img
        src={imageUrl}
        alt="Logo"
        className={cn("relative left-2 top-2 transition-all z-10 duration-300", {
          "w-[230px] h-[230px]": size === 20,
          "w-[330px] h-[330px]": size === 30,
          "w-[430px] h-[430px]": size === 40,
        })}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[380px] h-[380px]"></div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[300px] h-[300px]"></div>
    </div>
  );
};