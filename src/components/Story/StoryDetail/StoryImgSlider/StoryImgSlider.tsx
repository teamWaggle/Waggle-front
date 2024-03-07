import React, { useState, useRef } from "react";

import { Flex, SliderArrow } from "@/components/common";

// import type { FileProp } from "@/types/upload";

import {
	layoutStyle,
	imgBoxStyle,
	sliderBoxStyle,
} from "@/components/Story/StoryDetail/StoryImgSlider/StoryImgSlider.style";

const StoryImgSlider = ({ imgUrls }: { imgUrls: string[] }) => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const totalIndex = imgUrls.length;

	const wrapRef = useRef<HTMLDivElement>(null);

	const handleLeftArrowClick = () => {
		const wrap = wrapRef.current;

		if (wrap === null) return;
		if (sliderIndex <= 0) return;

		wrap.scrollBy({
			left: -wrap.clientWidth,
			behavior: "smooth",
		});

		detectScroll();
	};

	const handleRightArrowClick = () => {
		const wrap = wrapRef.current;

		if (wrap === null || !totalIndex) return;
		if (sliderIndex >= totalIndex) return;

		wrap.scrollBy({
			left: wrap.clientWidth,
			behavior: "smooth",
		});

		detectScroll();
	};

	const detectScroll = (): undefined => {
		const wrap = wrapRef.current;
		if (wrap === null) return;

		let timer = null;

		if (timer !== null) {
			clearTimeout(timer);
		}

		timer = setTimeout(function () {
			setSliderIndex(Math.round(wrap.scrollLeft / wrap.clientWidth));
		}, 150);
	};

	if (!totalIndex) {
		return <div>로딩중...</div>;
	}

	return (
		<Flex css={layoutStyle}>
			<div css={imgBoxStyle} ref={wrapRef} onScroll={detectScroll}>
				{
					<div css={sliderBoxStyle(`${(totalIndex + 1) * 100}%`)}>
						{imgUrls.map((media) => (
							<img key={media} src={media} alt="mediaImg" />
						))}
					</div>
				}
			</div>

			{totalIndex > 1 && (
				<SliderArrow
					sliderIndex={sliderIndex}
					totalIndex={totalIndex}
					handleLeftArrow={handleLeftArrowClick}
					handleRightArrow={handleRightArrowClick}
				/>
			)}
		</Flex>
	);
};

export default React.memo(StoryImgSlider);
