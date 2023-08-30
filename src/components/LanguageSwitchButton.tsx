import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitchButton = () => {
  const { setLanguage } = useLanguage();

  return (
    <button onClick={() => setLanguage(prevLang => prevLang === 'en-US' ? 'pt-BR' : 'en-US')}>
      Click to see the language
    </button>
  );
};
