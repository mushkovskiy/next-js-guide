'use client';

import { useSetIsFavorite } from '@/app/providers/favourite/hooks';
import { FC, useCallback } from 'react';

interface Props {
  isFavorite: boolean;
  productId: number;
}

const handleFavorite = async ({ isFavorite, productId }: Props) => {
  const url = `http://localhost:4000/api/product/${productId}/favorite`;

  return isFavorite
    ? fetch(url, {
      credentials: 'include',
      method: 'DELETE',
    })
    : fetch(url, {
      credentials: 'include',
      method: 'POST',
    });
};

export const ToggleFavoriteButton: FC<Props> = ({ isFavorite, productId }) => {
  const setFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ isFavorite, productId }: Props) => {
      setFavorite({ id: productId, isFavorite: !isFavorite });
      await handleFavorite({ isFavorite, productId });
    },
    [setFavorite],
  );

  return (

    <button
      onClick={() => handleClick({ isFavorite, productId })}
      className="absolute top-3 right-3 z-10 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Add to favorites">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={isFavorite ? '#fb2c36' : 'none'}
        stroke={isFavorite ? '#fb2c36' : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isFavorite ? 'text-red-500 hover:text-red-600 transition-colors' : 'text-gray-400 hover:text-red-500 transition-colors'}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
};
