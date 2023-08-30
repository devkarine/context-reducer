import { createContext, useContext, useState } from 'react';
import { LanguageProps } from '../types/LanguageProps';

const LanguageContext = createContext<LanguageProps | null>(null);

export const LanguageProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<'en-US' | 'pt-BR'>('en-US');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);

  if (!ctx || ctx === undefined){
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return ctx
}
