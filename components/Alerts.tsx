import React from 'react';
import { DriverAlert } from '../types';
import { InfoIcon, WarningIcon } from './icons';
import { useLang } from '../contexts/LangContext';

interface AlertsProps {
  alerts: DriverAlert[];
}

const alertStyles = {
  info: {
    container: 'bg-blue-50 dark:bg-blue-900/50 border-blue-400 dark:border-blue-500',
    icon: <InfoIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    text: 'text-blue-800 dark:text-slate-200',
  },
  warning: {
    container: 'bg-amber-50 dark:bg-amber-900/50 border-amber-400 dark:border-amber-500',
    icon: <WarningIcon className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    text: 'text-amber-800 dark:text-slate-200',
  },
  critical: {
    container: 'bg-red-50 dark:bg-red-900/50 border-red-400 dark:border-red-500',
    icon: <WarningIcon className="w-5 h-5 text-red-500 dark:text-red-400" />,
    text: 'text-red-800 dark:text-slate-200',
  },
};

const Alerts: React.FC<AlertsProps> = ({ alerts }) => {
  const { t } = useLang();
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-4">{t('alertsTitle')}</h2>
      <div className="space-y-3">
        {alerts.length > 0 ? alerts.map(alert => {
          const styles = alertStyles[alert.type];
          return (
            <div key={alert.id} className={`flex items-start gap-3 p-3 rounded-md border-l-4 ${styles.container}`}>
              <div className="flex-shrink-0 mt-0.5">{styles.icon}</div>
              <p className={`text-sm ${styles.text}`}>{alert.message}</p>
            </div>
          );
        }) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('noActiveAlerts')}</p>
        )}
      </div>
    </div>
  );
};

export default Alerts;