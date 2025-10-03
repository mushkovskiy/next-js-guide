'use client';

import { useTransition } from 'react';

const handleLogout = async () => {
  await fetch('http://localhost:4000/api/auth/logout', {
    credentials: 'include',
    method: 'DELETE',
  });

  location.assign('/');
};

const Logout = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(handleLogout)}
      className="
        bg-red-600 hover:bg-red-700 disabled:bg-red-400
        text-white font-medium py-2 px-4
        rounded-lg transition-colors duration-200
        disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
        shadow-md hover:shadow-lg
      ">
      {isPending ? 'Logging out...' : 'Logout'}
    </button>
  );
};

export default Logout;
