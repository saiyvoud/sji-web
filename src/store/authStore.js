import { create } from "zustand";
import { persist } from "zustand/middleware";
import { encryptPassword } from "../helper/cryptoJS";
export const useAuthStore = create(
  persist(
    (set, get) => ({
      AuthDetail: null,
      setAuthDetail: (data) => set({ AuthDetail: data }),
      clearAuthDetail: () => set({ AuthDetail: null }),
      isLoggedIn: () => !!get().AuthDetail, // ตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือยัง
    }),
    {
      name: "authDetail",
      getStorage: () => localStorage,
    },
  ),
);
export const useRememberMeStore = create(
  persist(
    (set, get) => ({
      RememberMe: false,
      setRememberMe: (data) => set({ RememberMe: data }),
      clearRememberMe: () => set({ RememberMe: null }),
      isRememberMe: () => get().RememberMe === true,
    }),
    {
      name: "reMemberMe",
      getStorage: () => localStorage,
    },
  ),
);
export const useMyTempStore = create(
  persist(
    (set, get) => ({
      MyTemp: null,
      setMyTemp: (username, password) => {
        const cryptopass = encryptPassword(password);
        set({ MyTemp: { username: username, password: cryptopass } });
      },
      clearMyTemp: () => set({ MyTemp: null }),
      getMyTemp: () => get().MyTemp
    }),
    {
      name: "myTemp",
      getStorage: () => localStorage,
    },
  ),
);
export const useMeStore = create(
  persist(
    (set, get) => ({
      Me: null,
      setMe: (data) => {
        set({ Me: data });
      },
      clearMe: () => set({ Me: null }),
      getMe: () => get().Me
    }),
    {
      name: "me",
      getStorage: () => localStorage,
    },
  ),
);
export const useRegisterTempStore = create(
  persist(
    (set, get) => ({
      data: null,
      setRegisterTemp: (data) => {
        set({ data: data });
      },
      clearRegisterTemp: () => set({ data: null }),
      getRegisterTemp: () => get().data
    }),
    {
      name: "regiterTemp",
      getStorage: () => localStorage,
    },
  ),
);
