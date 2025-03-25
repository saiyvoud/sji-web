import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useRedirectUrl = create(
  persist(
    (set) => ({
      redirectUrl: "/",
      setRedirectUrl: (url) => set({ redirectUrl: url }),
      clearRedirectUrl: () => set({ redirectUrl: "/" }),
    }),
    {
      name: "redirectUrl",
      getStorage: () => localStorage,
    },
  ),
);
