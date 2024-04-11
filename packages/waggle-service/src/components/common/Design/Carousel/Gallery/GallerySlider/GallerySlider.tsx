import { useState, useRef, useCallback, useEffect } from "react";
import { flushSync } from "react-dom";

import CloseIcon from "@/assets/svg/ic-gallery-close.svg?react";
import LeftArrowIcon from "@/assets/svg/left-arrow.svg?react";
import RightArrowIcon from "@/assets/svg/right-arrow.svg?react";

import {
  layoutStyle,
  sliderBoxStyle,
  sliderStyle,
  imgBoxStyle,
  imgStyle,
  arrowBoxStyle,
  closeIconBoxStyle,
} from "@/components/common/Design/Carousel/Gallery/GallerySlider/GallerySlider.style";

interface GallerySliderParams {
  mediaCurrentIndex: number;
  updatedMediaList?: string[];
  handleMoveImage: (imgIndex: number) => void;
  handleImgRemove: (media: string) => void;
}

const GallerySlider = ({
  mediaCurrentIndex,
  updatedMediaList,
  handleMoveImage,
  handleImgRemove,
}: GallerySliderParams) => {
  const [isShowLeftArrow, setIsShowLeftArrow] = useState<boolean | null>(false);
  const [isShowRightArrow, setIsShowRightArrow] = useState<boolean | null>(true);

  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    if (wrapRef.current.clientWidth === wrapRef.current.scrollWidth) {
      setIsShowLeftArrow(null);
      setIsShowRightArrow(null);
    }
  }, []);

  const handleLeftArrowClick = useCallback(() => {
    const wrap = wrapRef.current;

    if (wrap === null) return;

    wrap.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleRightArrowClick = useCallback(() => {
    const wrap = wrapRef.current;

    if (wrap === null) return;

    wrap.scrollTo({
      left: wrap.scrollWidth,
      behavior: "smooth",
    });
  }, []);

  const handleGalleryScroll = useCallback(() => {
    if (!wrapRef.current) return;

    if (wrapRef.current.scrollLeft === 0) {
      setIsShowLeftArrow(false);
      setIsShowRightArrow(true);
    } else if (
      wrapRef.current.clientWidth ===
      wrapRef.current.scrollWidth - wrapRef.current.scrollLeft
    ) {
      setIsShowLeftArrow(true);
      setIsShowRightArrow(false);
    } else {
      setIsShowLeftArrow(false);
      setIsShowRightArrow(false);
    }
  }, []);

  const handleGalleryClose = useCallback(
    (mediaIndex: number, media: string) => {
      if (!updatedMediaList) return;

      flushSync(() => {
        handleImgRemove(media);

        handleMoveImage(mediaIndex !== 0 ? mediaIndex - 1 : mediaIndex);
      });
    },
    [mediaCurrentIndex, updatedMediaList]
  );

  return (
    <div css={layoutStyle}>
      {updatedMediaList && (
        <div
          css={sliderBoxStyle(updatedMediaList.length)}
          ref={wrapRef}
          onScroll={handleGalleryScroll}
        >
          <div css={sliderStyle}>
            {updatedMediaList.map((img, index) => (
              <div key={`${img}${index}`} css={imgBoxStyle}>
                <img src={img} css={imgStyle} onClick={() => handleMoveImage(index)} />

                {mediaCurrentIndex === index && (
                  <div
                    css={closeIconBoxStyle}
                    onClick={() => handleGalleryClose(mediaCurrentIndex, img)}
                  >
                    <CloseIcon fill="#fff" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {isShowLeftArrow !== null && isShowLeftArrow && (
        <button css={arrowBoxStyle} className="leftArrow" onClick={handleLeftArrowClick}>
          <LeftArrowIcon width={16} height={16} />
        </button>
      )}

      {isShowRightArrow !== null && isShowRightArrow && (
        <button css={arrowBoxStyle} className="rightArrow" onClick={handleRightArrowClick}>
          <RightArrowIcon width={16} height={16} />
        </button>
      )}
    </div>
  );
};

export default GallerySlider;
