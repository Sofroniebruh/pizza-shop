import { create } from "zustand/react";
import { API } from "@/lib/services/api_client";
import { getCartDetails } from "@/lib";

export type ICartItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  size?: number | null;
  productType?: number | null;
  extraIngredients: Array<{ name: string; price: number }>
}

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: ICartItem[];
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: any) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await API.cartItems.GET_CART_ITEMS();
      console.log("UWU: ", data);
      console.log("UWU: ", data == undefined);
      set(getCartDetails(data));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ error: false });
    }
  },
  updateItemQuantity: (id: number, quantity: number) => Promise.resolve(),
  addCartItem: (values: any) => Promise.resolve(),
  removeCartItem: (id: number) => Promise.resolve(),
}));