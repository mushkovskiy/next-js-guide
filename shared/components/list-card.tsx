'use client';

import Image from 'next/image';
import { TRacket } from '../../mocks/mock-data-type';
import { useRouter } from 'next/navigation';

export const ListCard = ({ item }: { item: TRacket }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/racket/${item.id}`)}
      key={item.id}
      className="w-[240px] border border-gray-200 rounded overflow-hidden bg-white">
      <div className="w-full h-[180px] bg-gray-100 flex items-center justify-center">
        <Image
          width={200}
          height={200}
          src={item.imageUrl}
          alt={item.name}
          className="max-w-full max-h-full object-contain" />
      </div>
      <div className="p-3">
        <div className="font-semibold mb-1">{item.name}</div>
        <div className="text-gray-500 text-sm mb-2">
          {item.brand?.name ? `${item.brand.name} • ${item.model}` : item.model}
          {' '}
          (
          {item.year}
          )
        </div>
        <div className="font-bold">
          $
          {item.price}
        </div>
      </div>
    </div>
  );
};
