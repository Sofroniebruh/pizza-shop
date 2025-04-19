"use client";

import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

export const UseCart = () => {
  const fetchCartItems = useCartStore(state => state.fetchCartItems);
  const updateItemQuantity = useCartStore(state => state.updateItemQuantity);
  const removeCartItem = useCartStore(state => state.removeCartItem);
  const totalAmount = useCartStore(state => state.totalAmount);
  const items = useCartStore(state => state.items);
  const loading = useCartStore(state => state.loading);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return {
    updateItemQuantity,
    removeCartItem,
    totalAmount,
    items,
    loading,
  };
};