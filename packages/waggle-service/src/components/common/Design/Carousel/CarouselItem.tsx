import { useContext, useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

import { CarouselContext } from "@/components/common/Design/Carousel/Carousel";

import { carouselItemStyle } from "@/components/common/Design/Carousel/Carousel.style";

export interface CarouselItemProps extends PropsWithChildren {
  index: number;
}

const CarouselItem = ({ index, children }: CarouselItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const context = useContext(CarouselContext);

  if (!context) throw Error("Carousel context error");

  const { width, height, mediaIndex, itemRef } = context;

  useEffect(() => {
    if (ref.current) {
      if (index === mediaIndex) itemRef.current = ref.current;
    }
  }, [mediaIndex]);

  return (
    <div ref={ref} css={carouselItemStyle(width, height)}>
      {children}
    </div>
  );
};

export default CarouselItem;
