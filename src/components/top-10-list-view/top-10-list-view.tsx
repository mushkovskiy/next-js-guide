import { TRacket } from '@/types/racket';
import ListView from '../../../shared/components/list-view';

interface Top10ListViewProps {
  items: TRacket[];
}

const Top10ListView = ({ items }: Top10ListViewProps) => {
  return (
    <div className="w-full">
      {/* Спокойный заголовок */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mr-3">
            TOP 10
          </div>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          Лучшие теннисные ракетки
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
          Подборка популярных и качественных теннисных ракеток, выбранных на основе
          отзывов и рейтингов профессионалов
        </p>
      </div>

      <ListView items={items} />
    </div>
  );
};

export default Top10ListView;
