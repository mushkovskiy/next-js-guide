import { TRacket } from '@/types/racket';
import { use, useEffect } from 'react';
import { FavoriteContext } from '.';

export const useSetIsFavorite = () => {
  const { setFavorite } = use(FavoriteContext);

  return setFavorite;
};

export const useHydrateFavorite = ({
  racketId,
  isFavorite,
}: {
  racketId: TRacket['id'];
  isFavorite?: boolean;
}) => {
  // console.log('🚀 ~ useHydrateFavorite ~ isFavorite:', isFavorite);
  const setIsFavorite = useSetIsFavorite();

  useEffect(() => {
    if (typeof isFavorite === 'boolean') {
      setIsFavorite({
        isFavorite: isFavorite,
        id: racketId,
      });
    }
  }, [racketId, isFavorite, setIsFavorite]);
};

export const useIsFavoriteById = ({
  id,
  isFavoriteInitial,
}: {
  id: TRacket['id'];
  isFavoriteInitial?: boolean;
}): boolean => {
  const { favorites } = use(FavoriteContext);
  const isFavoriteGlobal = favorites[id] ?? null;

  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return Boolean(isFavorite);
};
