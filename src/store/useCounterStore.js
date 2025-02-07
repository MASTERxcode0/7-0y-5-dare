import { create } from "zustand";

const useCounterState = create((set) => ({
  counter: [],

  add: (value) => {
    set((state) => ({
      counter: [...state.counter, value],
    }));
  },

  remove: (id) => {
    set((state) => ({
      counter: state.counter.filter((item) => item.id !== id),
    }));
  },

  edit: (value) => {
    set((state) => ({
      counter: state.counter.map((item) =>
        item.id === value.id ? value : item
      ),
    }));
  },

  clear: () => {
    set({ counter: [] });
  },
}));

export default useCounterState;
