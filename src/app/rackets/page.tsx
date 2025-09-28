import Link from 'next/link';
import ListView from '../../../shared/components/list-view';
import { getRackets } from '@/services/get-rackets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rackets Page',
  description: 'Rackets page',
};  

const RacketsPage = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 20 });

  if (isError) {
    return 'error';
  }

  if (!data) {
    return 'no result';
  }
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <aside style={{ width: 220, padding: 16, borderRight: '1px solid #e5e7eb' }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Brand</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Link href="#">Wilson</Link>
          <Link href="#">Head</Link>
          <Link href="#">Babolat</Link>
        </nav>
      </aside>
      <main style={{ flex: 1 }}>
        <ListView items={data} />
      </main>
    </div>
  );
};

export default RacketsPage;
