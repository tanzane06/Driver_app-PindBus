import React, { useMemo } from 'react';
import { DriverRoute } from '../types';
import { MapPinIcon } from './icons';
import { useLang } from '../contexts/LangContext';

interface RouteInfoProps {
  route: DriverRoute;
}

const RouteInfo: React.FC<RouteInfoProps> = ({ route }) => {
  const { t } = useLang();
  const nextStop = useMemo(() => route.stops.find(s => s.status === 'pending'), [route.stops]);
  const completedStops = useMemo(() => route.stops.filter(s => s.status === 'completed').length, [route.stops]);
  
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-4">{t('routeLabel')}: {route.id} - {route.name}</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('nextStopLabel')}</h3>
          {nextStop ? (
            <div className="flex items-start gap-3 mt-1">
              <MapPinIcon className="w-5 h-5 mt-1 text-blue-500 dark:text-blue-400 flex-shrink-0" />
              <p className="text-base text-slate-800 dark:text-white font-medium">{nextStop.address}</p>
            </div>
          ) : (
            <p className="text-green-500 dark:text-green-400">{t('allStopsCompleted')}</p>
          )}
        </div>
        <div>
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('progressLabel')}</h3>
          <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
            <div 
              className="bg-blue-500 h-2.5 rounded-full" 
              style={{ width: `${(completedStops / route.stops.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-right text-xs text-slate-500 dark:text-slate-400 mt-1">
            {t('stopsCompleted', { completed: completedStops, total: route.stops.length })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RouteInfo;