'use client';
import Image from 'next/image';
import { TRacket } from '../../../mocks/mock-data-type';
import { use } from 'react';
import { UserContext } from '@/app/providers/user/user-provider';
import { useHydrateFavorite, useIsFavoriteById } from '@/app/providers/favourite/hooks';
import { ToggleFavoriteButton } from '../toggle-favourite-button/toggle-favourite-button';

type RacketProps = {
  racket: TRacket;
};

const isUserDataAsArray = (userData: unknown): userData is TRacket['userData'][] => {
  return Array.isArray(userData);
};
const Racket = ({ racket }: RacketProps) => {
  const { user } = use(UserContext);

  const { id, userData } = racket;

  const userInfo = isUserDataAsArray(userData) ? userData.find(({ productId }) => productId === id) : userData;
  useHydrateFavorite({
    racketId: id,
    isFavorite: Boolean(userInfo?.isFavorite),
  });

  const isFavoriteGlobal = useIsFavoriteById({
    id,
    isFavoriteInitial: Boolean(userInfo?.isFavorite),
  });
  return (
    <div className="relative grid grid-cols-[1fr_220px_120px] gap-4 items-center border border-gray-200 rounded-lg p-3 bg-white">
      {user && (
        <ToggleFavoriteButton isFavorite={isFavoriteGlobal} productId={id} />
      )}
      <div>
        <div className="font-bold mb-1.5">{racket.name}</div>
        <div className="text-gray-600 text-sm">{racket.description}</div>
      </div>
      <div className="w-full bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
        <Image
          width={400}
          height={300}
          src={racket.imageUrl}
          alt={racket.name}
          className="max-w-full max-h-full object-contain" />
      </div>
      <div className="font-bold text-lg text-right">
        $
        {racket.price}
      </div>
    </div>
  );
};

export default Racket;
