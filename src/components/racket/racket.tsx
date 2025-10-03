'use client';
import Image from 'next/image';
import { TRacket } from '../../../mocks/mock-data-type';
import { UserContext } from '@/app/providers/user-provider';
import { use } from 'react';

type RacketProps = {
  racket: TRacket;
};

const Racket = ({ racket }: RacketProps) => {
  const { user } = use(UserContext);

  return (
    <div className="relative grid grid-cols-[1fr_220px_120px] gap-4 items-center border border-gray-200 rounded-lg p-3 bg-white">
      {user && (
        <button
          className="absolute top-3 right-3 z-10 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Add to favorites">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 hover:text-red-500 transition-colors">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
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
