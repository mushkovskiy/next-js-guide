import Image from 'next/image';
import { TRacket } from '../../../mocks/mock-data-type';

type RacketProps = {
  racket: TRacket;
};

const Racket = ({ racket }: RacketProps) => {
  return (
    <div className="grid grid-cols-[1fr_220px_120px] gap-4 items-center border border-gray-200 rounded-lg p-3 bg-white">
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
