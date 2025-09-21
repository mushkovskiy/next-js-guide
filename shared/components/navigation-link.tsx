'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavigationLink = ({ children, href }: Readonly<{
  children: React.ReactNode;
  href: string;
}>) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
        isActive
          ? 'text-blue-600 bg-blue-50 border border-blue-200'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}>
      {children}
    </Link>
  );
};
