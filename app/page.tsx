import Common from "@/components/shared-components/common";
import TopBar from "@/components/shared-components/top-bar";
import Filtering from "@/components/shared-components/filtering";
import CardsItems from "@/components/shared-components/cards-items";

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
                        <CardsItems items={
                            [
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                            ]
                        } categoryId={1} name={"Pizzas"} className={"mb-10"}>
                        </CardsItems>
                        <CardsItems items={
                            [
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                                {
                                    name: "Pizza",
                                    price: 10,
                                    image: "https://media.dodostatic.net/image/r:233x233/11ee7d60fda22358ac33c6a44eb093a2.avif"
                                },
                            ]
                        } categoryId={2} name={"Combos"} className={"mb-5"}>
                        </CardsItems>
                    </div>
                </div>
            </Common>
        </>
    );
}
