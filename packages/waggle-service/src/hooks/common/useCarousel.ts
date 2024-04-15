import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { flushSync } from "react-dom";

const useCarousel = (mediaLength: number) => {
  const [mediaIndex, setMediaIndex] = useState(0);

  const carouselBoxRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMoveImage = (imgIndex: number) => {
    if (itemRef.current) {
      flushSync(() => {
        setMediaIndex(imgIndex);
      });

      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleClickLeft = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      flushSync(() => {
        if (mediaIndex === 0) setMediaIndex(0);
        else setMediaIndex(mediaIndex - 1);
      });

      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleClickRight = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (itemRef.current) {
      flushSync(() => {
        if (mediaIndex === mediaLength - 1) setMediaIndex(mediaIndex);
        else setMediaIndex(mediaIndex + 1);
      });

      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return {
    mediaIndex,
    itemRef,
    carouselBoxRef,
    handleMoveImage,
    handleClickLeft,
    handleClickRight,
  };
};

export default useCarousel;
