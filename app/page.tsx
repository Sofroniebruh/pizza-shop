import Common from "@/components/shared-components/common";
import Categories from "@/components/shared-components/categories";
import SortPopup from "@/components/shared-components/sort-popup";
import TopBar from "@/components/shared-components/top-bar";
import Filtering from "@/components/shared-components/filtering";

export default function Home() {
    return (
        <>
            <Common className={"mt-8"}>
                <h1 className={"text-3xl font-semibold"}>All Pizzas</h1>
            </Common>
            <TopBar></TopBar>
            <Common>
                <div className={"flex gap-[60px] my-10"}>
                    <div className={"w-1/4"}>
                        <Filtering/>
                    </div>
                    <div className={"w-3/4"}>
                        Content
                    </div>
                </div>
            </Common>
        </>
    );
}
