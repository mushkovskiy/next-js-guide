import { NavigationLink } from './navigation-link';

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200 px-6 py-4 mb-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Tennis Store</h1>
        <nav className="flex gap-6">
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/rackets">Rackets</NavigationLink>
          <NavigationLink href="/rackets/top-10">Top 10</NavigationLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
