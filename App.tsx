import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [busId, setBusId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'welcome' | 'login' | 'dashboard'>('welcome');

  useEffect(() => {
    try {
      const storedBusId = localStorage.getItem('busId');
      if (storedBusId) {
        setBusId(storedBusId);
        setCurrentView('dashboard');
      } else {
        setCurrentView('welcome');
      }
    } catch (error) {
      console.error("Failed to read from localStorage", error);
      setCurrentView('welcome');
    }
  }, []);

  const handleLogin = (id: string) => {
    try {
      localStorage.setItem('busId', id);
      setBusId(id);
      setCurrentView('dashboard');
    } catch (error) {
      console.error("Failed to write to localStorage", error);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('busId');
      setBusId(null);
      setCurrentView('welcome');
    } catch (error) {
      console.error("Failed to remove from localStorage", error);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return busId ? <Dashboard busId={busId} onLogout={handleLogout} /> : null;
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'welcome':
      default:
        return <WelcomeScreen onGetStarted={() => setCurrentView('login')} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-sky-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      {renderContent()}
    </div>
  );
};

export default App;