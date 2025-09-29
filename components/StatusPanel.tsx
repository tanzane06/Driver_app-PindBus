import React from 'react';
import { SignalIcon, SignalSlashIcon, BatteryIcon, BoltIcon, GPSErrorIcon, QueueIcon, MapPinIcon } from './icons';
import { useLang } from '../contexts/LangContext';

interface StatusPanelProps {
  isOnline: boolean;
  batteryLevel: number;
  isLowBattery: boolean;
  isLowDataMode: boolean;
  onLowDataModeChange: (value: boolean) => void;
  queueSize: number;
  geoError: string | null;
  isGpsWatching: boolean;
}

interface StatusItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  labelClassName?: string;
  showIndicator?: boolean;
}

const StatusItem: React.FC<StatusItemProps> = ({ icon, label, value, labelClassName, showIndicator }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
            {icon}
            <div className="flex items-center gap-2">
              <span className={`text-sm ${labelClassName || 'text-slate-600 dark:text-slate-300'}`}>{label}</span>
              {showIndicator && <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>}
            </div>
        </div>
        <div className="text-sm font-medium">{value}</div>
    </div>
);


const StatusPanel: React.FC<StatusPanelProps> = ({
  isOnline,
  batteryLevel,
  isLowBattery,
  isLowDataMode,
  onLowDataModeChange,
  queueSize,
  geoError,
  isGpsWatching,
}) => {
  const { t } = useLang();
  const batteryPercentage = Math.round(batteryLevel * 100);
  const isQueueActive = queueSize > 0;

  const getGpsStatus = () => {
    if (geoError) {
      return {
        icon: <GPSErrorIcon className="w-5 h-5 text-red-500 dark:text-red-400" />,
        text: <span className="text-red-500 dark:text-red-400">{t('errorStatus')}</span>,
      };
    }
    if (isGpsWatching) {
      return {
        icon: <BoltIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
        text: <span className="text-blue-500 dark:text-blue-400">{t('activeStatus')}</span>,
      };
    }
    return {
      icon: <MapPinIcon className="w-5 h-5 text-slate-400 dark:text-slate-500" />,
      text: <span className="text-slate-500 dark:text-slate-400">{t('standbyStatus')}</span>,
    };
  };

  const gpsStatus = getGpsStatus();
  const queueLabelColor = isQueueActive ? 'text-amber-500 dark:text-amber-400' : 'text-slate-600 dark:text-slate-300';
  const queueValueColor = isQueueActive ? 'text-amber-500 dark:text-amber-400' : 'text-slate-800 dark:text-slate-300';

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-2">{t('systemStatusTitle')}</h2>
      <div className="flex flex-col">
        <StatusItem
            icon={isOnline ? <SignalIcon className="w-5 h-5 text-green-500 dark:text-green-400" /> : <SignalSlashIcon className="w-5 h-5 text-red-500 dark:text-red-400" />}
            label={t('networkLabel')}
            value={isOnline ? <span className="text-green-500 dark:text-green-400">{t('onlineStatus')}</span> : <span className="text-red-500 dark:text-red-400">{t('offlineStatus')}</span>}
        />
        <StatusItem
            icon={gpsStatus.icon}
            label="GPS"
            value={gpsStatus.text}
        />
        <StatusItem
            icon={<BatteryIcon className={`w-5 h-5 ${isLowBattery ? 'text-amber-500 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'}`} />}
            label={t('batteryLabel')}
            value={<span className={isLowBattery ? 'text-amber-500 dark:text-amber-400' : 'text-slate-800 dark:text-slate-300'}>{batteryPercentage}%</span>}
        />
        <StatusItem
            icon={<QueueIcon className={`w-5 h-5 ${isQueueActive ? 'text-amber-500 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'}`} />}
            label={t('offlineQueueLabel')}
            labelClassName={queueLabelColor}
            value={<span className={queueValueColor}>{t('queueItems', { count: queueSize })}</span>}
            showIndicator={isQueueActive}
        />
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
            <label htmlFor="low-data-mode" className="text-sm text-slate-600 dark:text-slate-300">
                {t('lowDataModeLabel')}
            </label>
            <button
                id="low-data-mode"
                role="switch"
                aria-checked={isLowDataMode}
                onClick={() => onLowDataModeChange(!isLowDataMode)}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-blue-500 ${
                isLowDataMode ? 'bg-blue-600' : 'bg-slate-400 dark:bg-slate-600'
                }`}
            >
                <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    isLowDataMode ? 'translate-x-6' : 'translate-x-1'
                }`}
                />
            </button>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">{t('lowDataModeDescription')}</p>
      </div>
       {geoError && <p className="text-xs text-red-500 dark:text-red-400 mt-4 text-center">{t('gpsError', { error: geoError })}</p>}
    </div>
  );
};

export default StatusPanel;