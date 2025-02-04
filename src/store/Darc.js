import { create } from "zustand";

const useDarcState = create((set) => ({
  darc: false,
  setDarc: () => set((state) => ({ darc: !state.darc }))
}));

export default useDarcState;