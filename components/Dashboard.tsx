import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { useBatteryStatus } from '../hooks/useBatteryStatus';
import { LocationPoint, DriverRoute, DriverAlert } from '../types';
import Header from './Header';
import ShiftControl from './ShiftControl';
import RouteInfo from './RouteInfo';
import StatusPanel from './StatusPanel';
import Alerts from './Alerts';
import RouteConfirmation from './RouteConfirmation';
import { useLang } from '../contexts/LangContext';

interface DashboardProps {
  busId: string;
  onLogout: () => void;
}


const LOCATION_QUEUE_KEY = 'locationQueue';
const LOW_DATA_MODE_KEY = 'lowDataMode';

const Dashboard: React.FC<DashboardProps> = ({ busId, onLogout }) => {
  const [isTripActive, setIsTripActive] = useState(false);
  const [isLowDataMode, setIsLowDataMode] = useState(() => {
    try {
      const storedValue = localStorage.getItem(LOW_DATA_MODE_KEY);
      return storedValue ? JSON.parse(storedValue) : false;
    } catch {
      return false;
    }
  });
  const [locationQueue, setLocationQueue] = useState<LocationPoint[]>([]);
  const [isRouteConfirmed, setIsRouteConfirmed] = useState(false);
  const { lang } = useLang();

  const { location, error: geoError, isWatching, startWatching, stopWatching } = useGeolocation();
  const isOnline = useNetworkStatus();
  const { level: batteryLevel, isLow: isLowBattery } = useBatteryStatus();

  const MOCK_ROUTE: DriverRoute = useMemo(() => ({
    id: 'SR-1',
    name: lang === 'en' ? 'Sangrur-Patran' : 'ਸੰਗਰੂਰ-ਪਾਤੜਾਂ',
    stops: [
      { id: 'stop-1', address: lang === 'en' ? 'Bhawanigarh' : 'ਭਵਾਨੀਗੜ੍ਹ', status: 'completed' },
      { id: 'stop-2', address: lang === 'en' ? 'Ghabdan' : 'ਘਾਬਦਾਂ', status: 'pending' },
      { id: 'stop-3', address: lang === 'en' ? 'Patran' : 'ਪਾਤੜਾਂ', status: 'pending' },
    ],
  }), [lang]);

  const MOCK_ALERTS: DriverAlert[] = useMemo(() => [
    { id: 'alert-1', message: lang === 'en' ? 'Route SR-1: Expect a 10-minute delay near Bhawanigarh due to a local event.' : 'ਰੂਟ SR-1: ਭਵਾਨੀਗੜ੍ਹ ਨੇੜੇ ਇੱਕ ਸਥਾਨਕ ਸਮਾਗਮ ਕਾਰਨ 10-ਮਿੰਟ ਦੀ ਦੇਰੀ ਦੀ ਉਮੀਦ ਹੈ।', type: 'warning' },
    // FIX: Used double quotes for the Punjabi string to prevent parsing errors due to the inner single quote.
    { id: 'alert-2', message: lang === 'en' ? 'A passenger has reported a lost item. Please check your bus at the final stop.' : "ਇੱਕ ਯਾਤਰੀ ਨੇ ਗੁੰਮ ਹੋਈ ਵਸਤੂ ਦੀ ਰਿਪੋਰਟ ਕੀਤੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਆਖਰੀ ਸਟਾਪ 'ਤੇ ਆਪਣੀ ਬੱਸ ਦੀ ਜਾਂਚ ਕਰੋ।", type: 'info' },
  ], [lang]);

  useEffect(() => {
    try {
      localStorage.setItem(LOW_DATA_MODE_KEY, JSON.stringify(isLowDataMode));
    } catch (error) {
      console.error("Failed to save low data mode to localStorage", error);
    }
  }, [isLowDataMode]);
  
  const updateInterval = useMemo(() => (isLowDataMode ? 30000 : 10000), [isLowDataMode]);

  useEffect(() => {
    try {
      const storedQueue = localStorage.getItem(LOCATION_QUEUE_KEY);
      if (storedQueue) {
        setLocationQueue(JSON.parse(storedQueue));
      }
    } catch (e) {
      console.error("Failed to parse location queue from localStorage", e);
    }
  }, []);

  const syncQueue = useCallback(() => {
    if (isOnline && locationQueue.length > 0) {
      console.log(`[SYNC] Sending ${locationQueue.length} queued locations.`);
      // Simulate API call
      setTimeout(() => {
        setLocationQueue([]);
        try {
          localStorage.setItem(LOCATION_QUEUE_KEY, JSON.stringify([]));
        } catch (e) {
          console.error("Failed to clear queue in localStorage", e);
        }
        console.log('[SYNC] Queue cleared.');
      }, 500);
    }
  }, [isOnline, locationQueue]);

  useEffect(() => {
    syncQueue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  const processLocation = useCallback(() => {
    if (!location) return;

    if (isOnline) {
      console.log(`[UPLOAD] Sending location:`, location);
      syncQueue(); // Also try to sync any remaining queue items
    } else {
      console.log(`[OFFLINE] Queuing location:`, location);
      setLocationQueue(prevQueue => {
        const newQueue = [...prevQueue, location];
        try {
          localStorage.setItem(LOCATION_QUEUE_KEY, JSON.stringify(newQueue));
        } catch (e) {
          console.error("Failed to save queue to localStorage", e);
        }
        return newQueue;
      });
    }
  }, [location, isOnline, syncQueue]);

  useEffect(() => {
    if (isTripActive) {
      startWatching();
      const intervalId = setInterval(processLocation, updateInterval);
      return () => {
        clearInterval(intervalId);
        stopWatching();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTripActive, processLocation, updateInterval]);
  
  const toggleTrip = () => {
    if (!isRouteConfirmed) return;
    setIsTripActive(prev => !prev);
  };

  const handleSOS = () => {
    if (window.confirm("Are you sure you want to send an emergency alert? This action cannot be undone.")) {
        console.log(`[EMERGENCY] SOS signal sent for Bus ID: ${busId} at ${new Date().toISOString()}`);
        alert("Emergency signal sent to control center.");
    }
  };
  
  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col gap-4">
      {!isRouteConfirmed && (
        <RouteConfirmation 
          route={MOCK_ROUTE} 
          busId={busId} 
          onConfirm={() => setIsRouteConfirmed(true)} 
        />
      )}
      
      <Header busId={busId} onLogout={onLogout} onSOS={handleSOS} />

      <main className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity ${!isRouteConfirmed ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
        <div className="md:col-span-2 flex flex-col gap-4">
          <ShiftControl isActive={isTripActive} onToggle={toggleTrip} />
          <RouteInfo route={MOCK_ROUTE} />
          <Alerts alerts={MOCK_ALERTS} />
        </div>
        <div className="md:col-span-1">
          <StatusPanel 
            isOnline={isOnline}
            batteryLevel={batteryLevel}
            isLowBattery={isLowBattery}
            isLowDataMode={isLowDataMode}
            onLowDataModeChange={setIsLowDataMode}
            queueSize={locationQueue.length}
            geoError={geoError}
            isGpsWatching={isWatching}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;