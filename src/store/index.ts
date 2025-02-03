import { create } from "zustand";

export interface Store {
  soundEnabled: boolean;
  toggleSound: () => void;
  setSound: (soundEnabled: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  soundEnabled: true,
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  setSound: (soundEnabled) => set({ soundEnabled }),
}));
