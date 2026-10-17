import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh-CN",
    supportedLngs: ["zh-CN", "en", "ja", "weeb"],
    load: "currentOnly",
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
