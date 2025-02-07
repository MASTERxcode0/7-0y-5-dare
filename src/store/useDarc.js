import { create } from "zustand";

const useDarcState = create((set) => ({
  darc: false,

  toggleDarc: () => set((state) => ({ darc: !state.darc })),

  setDarc: (value) => set(() => ({ darc: value })),
}));

export default useDarcState;
