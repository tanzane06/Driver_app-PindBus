import React from 'react';
import { useLang } from '../contexts/LangContext';

const LangSwitcher: React.FC = () => {
  const { lang, setLang } = useLang();

  const toggleLang = () => {
    setLang(lang === 'en' ? 'pa' : 'en');
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-white bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-slate-500"
      aria-label={`Switch to ${lang === 'en' ? 'Punjabi' : 'English'}`}
    >
      {lang === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
    </button>
  );
};

export default LangSwitcher;