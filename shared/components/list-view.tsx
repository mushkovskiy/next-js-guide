import { TRacket } from '../../mocks/mock-data-type';
import { ListCard } from './list-card';

const ListView = ({ items }: { items: TRacket[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
      {items.map((item) => (
        <ListCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListView;
