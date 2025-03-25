import { create } from "zustand";
import i18n from "i18next";

const useLanguageStore = create((set) => ({
  currentLanguage: i18n.language,
  changeLanguage: (lng) => {
    i18n.changeLanguage(lng);
    set({ currentLanguage: lng });

    // document.body.style.fontFamily = "Noto sans Lao";
    if (lng === "en") {
      document.body.style.fontFamily = "Roboto";
    } else {
      document.body.style.fontFamily = "Noto sans Lao";
    }
  },
}));

export default useLanguageStore;
