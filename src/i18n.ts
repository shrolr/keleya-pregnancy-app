import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {
  welcomeScreenLocaleDe,
  welcomeScreenLocaleEn,
} from '~i18n/welcomeScreen';
import {NativeModules, Platform} from 'react-native';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;
i18n.use(initReactI18next).init({
  fallbackLng: 'en_US',
  lng: deviceLanguage,
  resources: {
    en_US: {
      welcomeScreen: welcomeScreenLocaleEn,
    },
    de_DE: {
      welcomeScreen: welcomeScreenLocaleDe,
    },
  },
  debug: true,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
