import { create } from "zustand"

export const useScene = create((set) => ({
  objects: [],
  selected: null,
  addObject: (obj) =>
    set((state) => ({ objects: [...state.objects, obj] })),
  select: (id) => set({ selected: id }),
}))
