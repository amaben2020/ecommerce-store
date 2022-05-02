import Cookies from "js-cookie";
import { useEffect } from "react";
//@ts-ignore
import { useTranslation } from "react-i18next";

const useLanguageHook = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "FR",
    },
    {
      code: "en",
      name: "English",
      country_code: "GB",
    },
    {
      code: "ar",
      name: " التطبيقات",
      country_code: "SA",
      dir: "rtl",
    },
  ];

  const setCookieToEnglishOnMount = () => {
    if (!Cookies.get("en")) {
      Cookies.set("i18next", "en", { expires: 365 });
    }
  };

  useEffect(() => {
    setCookieToEnglishOnMount();
  }, []);

  const currentLanguageCode = Cookies.get("i18next") || "en";

  const currentLanguage = languages.find(
    (lang) => lang.code === currentLanguageCode
  );

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
    document.title = `${t("app_title")} `;
  }, [currentLanguage, t]);

  return { languages, currentLanguage, currentLanguageCode, t, i18n };
};

export default useLanguageHook;
