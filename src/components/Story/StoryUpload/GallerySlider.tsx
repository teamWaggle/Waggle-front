import { useState, useRef, useCallback, useEffect } from "react";

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
} from "@/components/Story/StoryUpload/GallerySlider.style";

const GallerySlider = ({
	medias,
	mediaCurrentIndex,
	setMediaCurrentIndex,
}: {
	medias: string[];
	mediaCurrentIndex: number;
	setMediaCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
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

	const galleryScrollHandler = useCallback(() => {
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

	return (
		<div css={layoutStyle}>
			<div css={sliderBoxStyle(medias.length)} ref={wrapRef} onScroll={galleryScrollHandler}>
				<div css={sliderStyle}>
					{medias.map((file, index) => (
						<div css={imgBoxStyle}>
							<img
								key={`${file}${index}`}
								src={file}
								css={imgStyle}
								onClick={() => setMediaCurrentIndex(index)}
							/>
							{mediaCurrentIndex === index && (
								<div css={closeIconBoxStyle} onClick={() => console.log("abc")}>
									<CloseIcon fill="#fff" />
								</div>
							)}
						</div>
					))}
				</div>
			</div>

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
