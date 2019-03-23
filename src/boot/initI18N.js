// @flow

import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { mapValues, merge, map } from "lodash";

// $FlowFixMe how to let flow recognize this parcel syntax?
import translations from "../translations/*.js";

type TranslationValue = string | { [key: string]: TranslationValue };

type TranslationModules = {
  [namespace: string]: {
    default: { [language: string]: { [key: string]: TranslationValue } }
  }
};

type Translations = {
  [language: string]: {
    [namespace: string]: { [key: string]: TranslationValue }
  }
};

(translations: TranslationModules);

const langKey = "lang";

function parseInitialTranslations(
  translations: TranslationModules
): Translations {
  return merge(
    ...map(translations, (module, namespace) =>
      mapValues(module.default, translation => ({ [namespace]: translation }))
    )
  );
}

i18n
  .use(initReactI18next)
  .use(LngDetector)
  .init({
    resources: parseInitialTranslations(translations),

    fallbackLng: "en",

    interpolation: {
      // react is already safe from xss
      escapeValue: false
    },

    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: langKey,
      lookupLocalStorage: langKey,
      caches: ["localStorage"]
    }
  });

/**
 * 不严谨地单向绑定，当 localStorage 更新时同步更新 i18n.language
 * 便于在某些研发、调试场合，直接修改 localStorage 并立即触发 i18n.language 更新
 */
window.addEventListener("storage", e => {
  if (e.key === langKey) {
    i18n.changeLanguage(e.newValue);
  }
});
