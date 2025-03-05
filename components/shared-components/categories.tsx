import {cn} from "@/lib/utils";

export default function Categories({className}: { className?: string }) {
    const categories = ["Pizzas", "Combos", "Snacks", "Cocktails", "Coffee", "Drinks", "Deserts"]
    const selectedIndex = 0;

    return (
        <div className={cn("inline-flex rounded-2xl gap-1 bg-gray-50 p-1", className)}>
            {categories.map((category, index) => (
                <a key={index} href={"#"}
                   className={cn("h-11 font-bold flex items-center rounded-2xl p-5", selectedIndex === index && "text-primary bg-white shadow-md shadow-gray-200")}>
                    <button className={"cursor-pointer"}>{category}</button>
                </a>
            ))}
        </div>
    )
}