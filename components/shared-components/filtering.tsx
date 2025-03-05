import FilterCheckbox from "@/components/shared-components/filter-checkbox";

export default function Filtering({className}: { className?: string }) {
    return (
        <div className={className}>
            <h3 className={"text-xl font-semibold pb-8"}>Filtering</h3>
            <div className={"flex flex-col gap-4"}>
                <FilterCheckbox text={"New in"} value={"1"}></FilterCheckbox>
                <FilterCheckbox text={"Build yourself"} value={"2"}></FilterCheckbox>
            </div>
        </div>
    )
}