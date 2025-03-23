import {Button} from "@/components/ui";

type Variant = {
    name: string,
    value: string,
}

interface VariantProps {
    items: any[],
    value: Variant["value"],
    onClick: (variant: Variant["value"]) => void,
    isActive?: boolean,
}

export default function GroupVariants({items, value, onClick, isActive}: VariantProps) {
    return (
        <div className={"flex gap-4 bg-gray-50"}>
            {items.map((item, index) => (
                <Button key={index} onClick={() => onClick(item.value)}>
                    {item.name}
                </Button>
            ))}
        </div>
    )
}