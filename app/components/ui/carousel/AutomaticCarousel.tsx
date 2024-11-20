import type {CarouselItem} from '~/components/ui/carousel/carouselItem.type';
import {CarouselComponent} from './CarouselComponent';

export function AutomaticCarousel({
  carouselText,
}: {
  carouselText: CarouselItem[];
}) {
  return (
    <div className="w-full h-[50px] bg-black overflow-hidden flex items-center">
      <div className="flex gap-4 animate-slide whitespace-nowrap animate-slide">
        {carouselText.map((item: CarouselItem) => {
          return <CarouselComponent key={item.id} text={item.text} />;
        })}
        {carouselText.map((item: CarouselItem) => (
          <CarouselComponent key={`${item.id}-duplicate`} text={item.text} />
        ))}
      </div>
    </div>
  );
}
