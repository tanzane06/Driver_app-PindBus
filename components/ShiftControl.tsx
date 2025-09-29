import React from 'react';
import { useLang } from '../contexts/LangContext';

interface ShiftControlProps {
  isActive: boolean;
  onToggle: () => void;
}

const ShiftControl: React.FC<ShiftControlProps> = ({ isActive, onToggle }) => {
  const { t } = useLang();

  const buttonClasses = isActive 
    ? "bg-amber-500 hover:bg-amber-600 focus:ring-amber-400" 
    : "bg-green-500 hover:bg-green-600 focus:ring-green-400";
  
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-4">{t('tripControlTitle')}</h2>
      <button 
        onClick={onToggle}
        className={`w-full py-4 px-6 text-xl font-bold text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 ${buttonClasses}`}
      >
        {isActive ? t('endTripButton') : t('startTripButton')}
      </button>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        {t('statusLabel')}: <span className={`font-bold ${isActive ? 'text-green-500 dark:text-green-400' : 'text-amber-500 dark:text-amber-400'}`}>{isActive ? t('onTripStatus') : t('offTripStatus')}</span>
      </p>
    </div>
  );
};

export default ShiftControl;