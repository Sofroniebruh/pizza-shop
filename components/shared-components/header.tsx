import Common from "@/components/shared-components/common";
import Image from "next/image";
import {Button} from "@/components/ui";
import {ArrowRightIcon, LogInIcon, ShoppingCartIcon, UserIcon} from "lucide-react";

export default function HeaderElement() {
    return (
        <header className={"border-b border-gray-200"}>
            <Common className="flex items-center justify-between py-8">
                <div className={"flex items-center gap-4"}>
                    <Image src={"/logo.png"} alt="Logo" width={32} height={32}/>
                    <div>
                        <h1 className={"text-2xl uppercase font-black"}>PizzaStore</h1>
                        <p className={"leading-3 text-sm text-gray-400"}>Best pizza in your city</p>
                    </div>
                </div>
                <div>hello</div>
                <div className={"flex gap-4 items-center"}>
                    <Button variant={"outline"}
                            className={"flex gap-1 cursor-pointer items-center"}><UserIcon></UserIcon>Login</Button>
                    <Button variant={"default"} className={"group relative cursor-pointer"}>
                        <b>100&#8364;</b>
                        <span className={"w-[1px] h-full bg-white/30 mx-3"}></span>
                        <div className={"flex items-center gap-1 transition duration-300 group-hover:opacity-0"}>
                            <ShoppingCartIcon className={"h-4 w-4"}></ShoppingCartIcon>
                            <b>3</b>
                        </div>
                        <ArrowRightIcon
                            className={"absolute w-5 right-5 transition -translate-x-2 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}></ArrowRightIcon>
                    </Button>
                </div>
            </Common>
        </header>
    )
}