import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-md w-full mx-auto text-center px-6">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
            <svg
              className="w-16 h-16 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.09m6.582-6.582L16 8l-2.709-2.709M8 8l2.709-2.709" />
            </svg>
          </div>

          <h1 className="text-6xl font-bold text-slate-800 mb-2">404</h1>
          <div className="h-1 w-16 bg-slate-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">
            Ракетка не найдена
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            К сожалению, запрашиваемая ракетка не существует или была удалена из каталога.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/rackets"
            className="block w-full px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
            Перейти к каталогу ракеток
          </Link>

          <Link
            href="/"
            className="block w-full px-6 py-3 bg-white text-slate-600 border-2 border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 font-medium">
            Вернуться на главную
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Если вы считаете, что это ошибка, пожалуйста
            {' '}
            <a
              href="mailto:support@example.com"
              className="text-slate-600 hover:text-slate-800 underline">
              свяжитесь с нами
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
