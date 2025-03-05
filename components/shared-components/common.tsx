import React from "react";
import {cn} from "@/lib/utils";

export default function Common({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("mx-auto max-w-[1280px]", className)}>
            {children}
        </div>
    )
}