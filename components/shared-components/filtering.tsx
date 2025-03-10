import FilterCheckbox from "@/components/shared-components/filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared-components/range-slider";
import FilterCheckboxGroup from "@/components/shared-components/filter-checkbox-group";

export default function Filtering({className}: { className?: string }) {
    return (
        <div className={className}>
            <h3 className={"text-xl font-semibold pb-8"}>Filtering</h3>
            <div className={"flex flex-col gap-4"}>
                <FilterCheckbox text={"New in"} value={"1"}></FilterCheckbox>
                <FilterCheckbox text={"Build yourself"} value={"2"}></FilterCheckbox>
            </div>
            <div className={"border-t border-gray-200 mt-7 py-4"}>
                <p className={"mb-2 font-semibold"}>Price range:</p>
                <div className={"flex gap-3"}>
                    <Input type={"number"} placeholder={"0"} min={0} max={30} defaultValue={0}></Input>
                    <Input type={"number"} min={0} max={30} placeholder={"30"}></Input>
                </div>
                <div className={"mt-4"}>
                    <RangeSlider min={0} max={30} step={1} value={[0, 30]}></RangeSlider>
                </div>
                <FilterCheckboxGroup
                    className={"mt-8"}
                    title={"Ingredients"}
                    items={
                        [
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            },
                            {
                                text: "Cheese sauce",
                                value: "1",
                            }
                        ]
                    }
                    defaultItems={[
                        {
                            text: "Cheese sauce",
                            value: "1",
                        },
                        {
                            text: "Cheese sauce",
                            value: "1",
                        },
                        {
                            text: "Cheese sauce",
                            value: "1",
                        },
                        {
                            text: "Cheese sauce",
                            value: "1",
                        },
                        {
                            text: "Cheese sauce",
                            value: "1",
                        },
                        {
                            text: "Cheese sauce",
                            value: "1",
                        }
                    ]}
                    limit={6}
                    searchInputPlaceholder={"Search for ingredients"}/>
            </div>
        </div>
    )
}