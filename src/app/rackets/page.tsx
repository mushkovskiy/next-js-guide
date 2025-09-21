import Link from 'next/link';
import ListView from '../../../shared/components/list-view';
import { rackets } from '../../../mocks/mock-data';

const RacketsPage = () => {
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
        <ListView items={rackets} />
      </main>
    </div>
  );
};

export default RacketsPage;
