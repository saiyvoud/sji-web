import i18n from "i18next";

export const getDisplayText = (companyName, translationKey) => {
  const currentLanguage = i18n.language;

  if (currentLanguage === "en") {
    return `${translationKey} ${companyName}`;
  } else if (currentLanguage === "la") {
    return `${companyName} ${translationKey}`;
  }
  return `${translationKey} ${companyName}`;
};
