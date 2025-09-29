import React, { useState } from 'react';
import { useLang } from '../contexts/LangContext';

interface LoginScreenProps {
  onLogin: (busId: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { t } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      onLogin(inputValue.trim().toUpperCase());
    } else {
      setError(t('loginError'));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white dark:bg-slate-800 rounded-lg shadow-xl">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-slate-800 dark:text-white">PINDBUS</h2>
          <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
            {t('loginPrompt')}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="bus-id" className="sr-only">
                {t('busIdLabel')}
              </label>
              <input
                id="bus-id"
                name="busId"
                type="text"
                autoComplete="off"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={t('busIdPlaceholder')}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  if (error) setError('');
                }}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('signInButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;