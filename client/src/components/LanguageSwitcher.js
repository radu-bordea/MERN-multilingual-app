import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../reducers/languageReducer';
import i18n from '../i18n';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const handleLanguageChange = (lng) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng); // Change the language in i18n
  };

  return (
    <div>
      <p>Current Language: {language.toUpperCase()}</p> {/* Display current language */}
      <button
        onClick={() => handleLanguageChange('en')}
        style={{ backgroundColor: language === 'en' ? 'lightblue' : 'white' }} // Highlight selected language
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange('pl')}
        style={{ backgroundColor: language === 'pl' ? 'lightblue' : 'white' }} // Highlight selected language
      >
        Polski
      </button>
    </div>
  );
};

export default LanguageSwitcher;
