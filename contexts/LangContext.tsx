import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type Language = 'en' | 'pa';

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, options?: { [key: string]: string | number }) => string;
}

const translations: { [key in Language]: { [key: string]: string } } = {
  en: {
    loginPrompt: 'Sign in with your Bus ID',
    loginError: 'Bus ID cannot be empty.',
    busIdLabel: 'Bus ID',
    busIdPlaceholder: 'Enter Bus ID',
    signInButton: 'Sign In',
    logoutButton: 'Logout',
    tripControlTitle: 'Trip Control',
    startTripButton: 'START TRIP',
    endTripButton: 'END TRIP',
    statusLabel: 'Status',
    onTripStatus: 'ON TRIP',
    offTripStatus: 'OFF TRIP',
    routeLabel: 'Route',
    nextStopLabel: 'Next Stop',
    allStopsCompleted: 'All stops completed!',
    progressLabel: 'Progress',
    stopsCompleted: '{completed} of {total} stops completed',
    alertsTitle: 'Alerts',
    noActiveAlerts: 'No active alerts.',
    systemStatusTitle: 'System Status',
    networkLabel: 'Network',
    onlineStatus: 'Online',
    offlineStatus: 'Offline',
    errorStatus: 'Error',
    activeStatus: 'Active',
    standbyStatus: 'Standby',
    batteryLabel: 'Battery',
    offlineQueueLabel: 'Offline Queue',
    queueItems: '{count} items',
    lowDataModeLabel: 'Low Data Mode',
    lowDataModeDescription: 'Reduces location update frequency to save data and battery.',
    gpsError: 'GPS Error: {error}',
    confirmTripTitle: 'Confirm Your Trip',
    confirmTripDescription: 'Please verify the details below before starting.',
    confirmRouteButton: 'Confirm Route',
    getStarted: 'Get Started',
    useAsGuest: 'Use as Guest?',
  },
  pa: {
    loginPrompt: 'ਆਪਣੀ ਬੱਸ ਆਈਡੀ ਨਾਲ ਸਾਈਨ ਇਨ ਕਰੋ',
    loginError: 'ਬੱਸ ਆਈਡੀ ਖਾਲੀ ਨਹੀਂ ਹੋ ਸਕਦੀ।',
    busIdLabel: 'ਬੱਸ ਆਈਡੀ',
    busIdPlaceholder: 'ਬੱਸ ਆਈਡੀ ਦਾਖਲ ਕਰੋ',
    signInButton: 'ਸਾਈਨ ਇਨ ਕਰੋ',
    logoutButton: 'ਲੌਗ ਆਉਟ',
    tripControlTitle: 'ਟ੍ਰਿਪ ਕੰਟਰੋਲ',
    startTripButton: 'ਟ੍ਰਿਪ ਸ਼ੁਰੂ ਕਰੋ',
    endTripButton: 'ਟ੍ਰਿਪ ਖਤਮ ਕਰੋ',
    statusLabel: 'ਸਥਿਤੀ',
    // FIX: Used double quotes for Punjabi strings to prevent parsing errors due to inner single quotes.
    onTripStatus: "ਟ੍ਰਿਪ 'ਤੇ",
    offTripStatus: "ਟ੍ਰਿਪ 'ਤੇ ਨਹੀਂ",
    routeLabel: 'ਰੂਟ',
    nextStopLabel: 'ਅਗਲਾ ਸਟਾਪ',
    allStopsCompleted: 'ਸਾਰੇ ਸਟਾਪ ਪੂਰੇ ਹੋ ਗਏ!',
    progressLabel: 'ਪ੍ਰਗਤੀ',
    stopsCompleted: '{total} ਵਿੱਚੋਂ {completed} ਸਟਾਪ ਪੂਰੇ ਹੋਏ',
    alertsTitle: 'ਚੇਤਾਵਨੀਆਂ',
    noActiveAlerts: 'ਕੋਈ ਸਰਗਰਮ ਚੇਤਾਵਨੀ ਨਹੀਂ।',
    systemStatusTitle: 'ਸਿਸਟਮ ਸਥਿਤੀ',
    networkLabel: 'ਨੈੱਟਵਰਕ',
    onlineStatus: 'ਔਨਲਾਈਨ',
    offlineStatus: 'ਔਫਲਾਈਨ',
    errorStatus: 'ਗਲਤੀ',
    activeStatus: 'ਸਰਗਰਮ',
    standbyStatus: 'ਸਟੈਂਡਬਾਏ',
    batteryLabel: 'ਬੈਟਰੀ',
    offlineQueueLabel: 'ਔਫਲਾਈਨ ਕਤਾਰ',
    queueItems: '{count} ਆਈਟਮਾਂ',
    lowDataModeLabel: 'ਘੱਟ ਡਾਟਾ ਮੋਡ',
    lowDataModeDescription: 'ਡਾਟਾ ਅਤੇ ਬੈਟਰੀ ਬਚਾਉਣ ਲਈ ਟਿਕਾਣਾ ਅੱਪਡੇਟ ਬਾਰੰਬਾਰਤਾ ਘਟਾਉਂਦਾ ਹੈ।',
    gpsError: 'GPS ਗਲਤੀ: {error}',
    confirmTripTitle: 'ਆਪਣੀ ਯਾਤਰਾ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    confirmTripDescription: 'ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੇ ਵੇਰਵਿਆਂ ਦੀ ਜਾਂਚ ਕਰੋ।',
    confirmRouteButton: 'ਰੂਟ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    getStarted: 'ਸ਼ੁਰੂ ਕਰੋ',
    useAsGuest: 'ਮਹਿਮਾਨ ਵਜੋਂ ਵਰਤੋਂ?',
  },
};


const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = useCallback((key: string, options?: { [key: string]: string | number }) => {
    let translation = translations[lang][key] || translations['en'][key] || key;
    if (options) {
      Object.keys(options).forEach(optionKey => {
        translation = translation.replace(`{${optionKey}}`, String(options[optionKey]));
      });
    }
    return translation;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};