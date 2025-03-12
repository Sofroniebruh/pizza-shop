"use client"

import {cn} from "@/lib/utils";
import {useCategoryId} from "@/store/category_id";

export default function Categories({className}: { className?: string }) {
    const categories = ["Pizzas", "Combos", "Snacks", "Cocktails", "Coffee", "Drinks", "Deserts"]
    const selectedIndex = useCategoryId((state) => state.activeId);
    const handleScroll = (category: string, offset: number = 130) => {
        const target = document.getElementById(category);
        if (target) {
            const yOffset = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: yOffset, behavior: "smooth" });
        }
    };

    return (
        <div className={cn("inline-flex rounded-2xl gap-1 bg-gray-50 p-1", className)}>
            {categories.map((category, index) => (
                <button onClick={() => handleScroll(category)} key={index}
                    className={cn("h-11 font-bold flex items-center rounded-2xl p-5", selectedIndex === index + 1 && "text-primary bg-white shadow-md shadow-gray-200", "cursor-pointer")}>{category}</button>
            ))}
        </div>
    )
}