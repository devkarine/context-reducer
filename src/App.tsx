import './App.css';

import { ToolBar } from './components/ToolBar';
import { NotToolBar } from './components/NotToolBar';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {

  return (
  <>
    <NotToolBar />
    <br />
    <br />
    <LanguageProvider>
      app Raiz
      <br />
      <br />
      <ToolBar />
    </LanguageProvider>
  </>
  );
}
