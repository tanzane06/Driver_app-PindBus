import React from 'react';
import { LogoutIcon, WarningIcon as SOSIcon } from './icons';
import { useLang } from '../contexts/LangContext';
import LangSwitcher from './LangSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  busId: string;
  onLogout: () => void;
  onSOS: () => void;
}

const Header: React.FC<HeaderProps> = ({ busId, onLogout, onSOS }) => {
  const { t } = useLang();
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">DriverLink</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">{t('busIdLabel')}: {busId}</p>
      </div>
      <div className="flex items-center flex-wrap justify-center sm:justify-end gap-2 md:gap-4">
        <ThemeSwitcher />
        <LangSwitcher />
        <button
          onClick={onSOS}
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-red-500 animate-pulse"
          aria-label="Send emergency signal"
        >
          <SOSIcon className="w-5 h-5" />
          <span>SOS</span>
        </button>
        <button 
          onClick={onLogout} 
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-white bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-slate-500"
        >
          <LogoutIcon className="w-4 h-4" />
          <span>{t('logoutButton')}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;