import { Skeleton } from "@/components/ui";

export const CheckoutCartSkeleton = () => {
  return (
    <div className={"flex items-center justify-between"}>
      <div className={"flex flex-1 items-center gap-5"}>
        <Skeleton className={"w-[60px] h-[60px] rounded-full"} />
        <Skeleton className={"w-[232px] h-[40px] rounded-full"} />
      </div>
      <div className={"flex items-center"}>
        <Skeleton className={"w-[56px] h-[24px]"} />
      </div>
      <div className={"flex items-center ml-20"}>
        <Skeleton className={"w-[132px] h-[30px]"} />
      </div>
    </div>
  );
};