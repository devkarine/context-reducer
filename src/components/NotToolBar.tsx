import { useLanguage } from "../contexts/LanguageContext";

export const NotToolBar = () => {
  const {language} = useLanguage();
  return (
    <>
      Esse componente definitivamente não é a ToolBar...{language}
    </>
  );
};
