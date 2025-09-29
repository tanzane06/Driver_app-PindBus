import React from 'react';
import { DriverRoute } from '../types';
import { useLang } from '../contexts/LangContext';

interface RouteConfirmationProps {
  route: DriverRoute;
  busId: string;
  onConfirm: () => void;
}

const RouteConfirmation: React.FC<RouteConfirmationProps> = ({ route, busId, onConfirm }) => {
  const { t } = useLang();

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-2">{t('confirmTripTitle')}</h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-6">{t('confirmTripDescription')}</p>
        
        <div className="space-y-4 bg-slate-100 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('busIdLabel')}</p>
            <p className="text-lg font-semibold text-slate-800 dark:text-white">{busId}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('routeLabel')}</p>
            <p className="text-lg font-semibold text-slate-800 dark:text-white">{route.id}: {route.name}</p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={onConfirm}
            className="w-full py-3 px-6 text-lg font-bold text-white rounded-lg transition-colors bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            {t('confirmRouteButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteConfirmation;