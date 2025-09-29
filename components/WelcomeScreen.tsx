import React from 'react';
import { PindBusLogo } from './icons';
import { useLang } from '../contexts/LangContext';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  const { t } = useLang();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="flex flex-col items-center gap-4 mb-16">
        <PindBusLogo className="w-48 h-auto" />
        <div>
          <h1 className="text-4xl font-bold text-sky-700 dark:text-sky-300 tracking-wider">PINDBUS</h1>
          <p className="text-2xl text-sky-600 dark:text-sky-400">ਪਿੰਡਬਸ</p>
        </div>
      </div>
      
      <div className="w-full max-w-xs">
        <button
          onClick={onGetStarted}
          className="w-full py-3 px-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          {t('getStarted')}
        </button>
        <button className="mt-6 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
          {t('useAsGuest')}
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;