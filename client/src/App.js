import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  const { t, i18n } = useTranslation();
  console.log("Current language:", i18n.language);
  console.log("Translated welcome:", t('welcome'));

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('Welcome')}</h1>
    </div>
  );
};

export default App;
