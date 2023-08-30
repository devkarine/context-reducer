import { useLanguage } from '../contexts/LanguageContext';
import { LanguageButton } from './LanguageButton';
import { LanguageSwitchButton } from './LanguageSwitchButton';

export const ToolBar = () => {
  const value = useLanguage();

  return (
    <>
      Testes {value.language}
      <br />
      <LanguageButton />
      <br />
      <br />
      <LanguageSwitchButton />
    </>
  );
};
