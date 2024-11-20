import type {CarouselItem} from '~/components/ui/carousel/carouselItem.type';
import {AutomaticCarousel} from '../carousel/AutomaticCarousel';
import {HeroComponent} from './HeroComponent';
import {RecomendedBanner} from './RecomendedBanner';

export function HeroSection({
  animationContent,
}: {
  animationContent: CarouselItem[];
}) {
  return (
    <div>
      <HeroComponent />
      <AutomaticCarousel carouselText={animationContent} />
      <RecomendedBanner />
    </div>
  );
}
