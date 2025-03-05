import Categories from "@/components/shared-components/categories";
import SortPopup from "@/components/shared-components/sort-popup";
import Common from "@/components/shared-components/common";

export default function TopBar() {
    return (
        <div className={"sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10"}>
            <Common className={"flex justify-between"}>
                <Categories></Categories>
                <SortPopup></SortPopup>
            </Common>
        </div>
    )
}