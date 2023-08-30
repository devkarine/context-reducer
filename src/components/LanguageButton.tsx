import {  useLanguage } from '../contexts/LanguageContext';

export const LanguageButton = () => {
  const { language } = useLanguage();

  return (
    <button onClick={() => alert(language)}>
      Click to see the language
    </button>
  );
};
