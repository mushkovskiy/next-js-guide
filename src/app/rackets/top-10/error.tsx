'use client';

import { useEffect } from 'react';

interface RacketsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;

}

export default function RacketsError({ error, reset }: RacketsErrorProps) {
  useEffect(() => {
    console.error('Top 10 Rackets error caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <svg
              className="h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Что-то пошло не так
          </h1>
          <p className="text-gray-600 mb-6">
            Произошла непредвиденная ошибка. Мы работаем над её устранением.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
            <h3 className="text-sm font-medium text-red-800 mb-2">
              Детали ошибки (только в режиме разработки):
            </h3>
            <p className="text-xs text-red-700 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                ID ошибки:
                {' '}
                {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Попробовать снова
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Вернуться на главную
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Если проблема повторится, пожалуйста, обратитесь в службу поддержки
          </p>
        </div>
      </div>
    </div>
  );
}
