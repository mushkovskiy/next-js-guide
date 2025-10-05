import Footer from '../../../shared/components/footer';
import Header from '../../../shared/components/header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};
