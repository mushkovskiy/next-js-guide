'use client';
import { use } from 'react';
import { NavigationLink } from './navigation-link';
import { UserContext } from '@/app/providers/user-provider';
import Logout from '@/components/logout/logout';

const Header = () => {
  const { user } = use(UserContext);
  return (
    <header className="bg-white shadow-md border-b border-gray-200 px-6 py-4 mb-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Tennis Store</h1>
        {!user && <NavigationLink href="/login">Login</NavigationLink>}
        <nav className="flex gap-6">
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/rackets">Rackets</NavigationLink>
          <NavigationLink href="/rackets/top-10">Top 10</NavigationLink>
        </nav>
        {user ? <Logout /> : <NavigationLink href="/signup">Sign Up</NavigationLink>}
      </div>
    </header>
  );
};

export default Header;
