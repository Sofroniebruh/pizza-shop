import { create } from "zustand/react";

interface Category {
  activeId: number,
  setActiveId: (activeId: number) => void,
}

export const useCategoryId = create<Category>(((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
})));