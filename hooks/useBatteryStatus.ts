import { useState, useEffect } from 'react';

interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
}

interface BatteryState {
  isSupported: boolean;
  level: number;
  isLow: boolean;
}

export const useBatteryStatus = () => {
  const [batteryState, setBatteryState] = useState<BatteryState>({
    isSupported: 'getBattery' in navigator,
    level: 1,
    isLow: false,
  });

  useEffect(() => {
    if (!('getBattery' in navigator)) {
      return;
    }

    let batteryManager: BatteryManager | null = null;

    const updateBatteryStatus = (manager: BatteryManager) => {
      setBatteryState({
        isSupported: true,
        level: manager.level,
        isLow: manager.level < 0.2, // Consider low if under 20%
      });
    };
    
    (navigator as any).getBattery().then((manager: BatteryManager) => {
      batteryManager = manager;
      updateBatteryStatus(manager);

      manager.addEventListener('levelchange', () => updateBatteryStatus(manager));
      manager.addEventListener('chargingchange', () => updateBatteryStatus(manager));
    });

    return () => {
      if (batteryManager) {
        batteryManager.removeEventListener('levelchange', () => updateBatteryStatus(batteryManager!));
        batteryManager.removeEventListener('chargingchange', () => updateBatteryStatus(batteryManager!));
      }
    };
  }, []);

  return batteryState;
};
