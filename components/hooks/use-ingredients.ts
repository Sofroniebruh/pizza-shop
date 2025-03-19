import {useEffect, useState} from "react";
import {Ingredient} from "@prisma/client";
import {API} from "@/lib/services/api_client";
import {toast} from "sonner";

export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        API.ingredients.GET_INGREDIENTS().then(
            (data) => {
                setIngredients(data);
                setIsLoading(false);
            }
        ).catch(error => toast("Something went wrong!"))
            .finally(() => setIsLoading(false));
    }, [])

    return {
        ingredients,
        isLoading,
    }
}