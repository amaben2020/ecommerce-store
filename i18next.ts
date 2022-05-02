import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)

  .init({
    supportedLngs: ["en", "fr", "ar"],
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",

      addPath:
        process.env.NODE_ENV === "development"
          ? "/locales/{{lng}}/translation.json"
          : "/static/locales/{{lng}}/translation.json",
      crossDomain: false,
    },
    react: {
      useSuspense: false,
    },
    // lng: document && document.querySelector("html")?.lang,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    saveMissing: true,
  });

export default i18n;
