import { create } from "zustand";

const useShoppingCardState = create((set) => ({
  shoppingCard: [],

  add: (value) => {
    set((state) => ({
      shoppingCard: [...state.shoppingCard, value],
    }));
  },

  remove: (id) => {
    set((state) => ({
      shoppingCard: state.shoppingCard.filter((item) => item.id !== id),
    }));
  },

  edit: (value) => {
    set((state) => ({
      shoppingCard: state.shoppingCard.map((item) =>
        item.id === value.id ? value : item
      ),
    }));
  },

  clear: () => {
    set({ shoppingCard: [] });
  },
}));

export default useShoppingCardState;

