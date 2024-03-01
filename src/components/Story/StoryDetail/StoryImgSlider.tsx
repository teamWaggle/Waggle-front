import React, { useState, useEffect, useRef } from "react";

import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";

import { Flex } from "@/components/common";

import {
	layoutStyle,
	imgBoxStyle,
	sliderBoxStyle,
	imgStyle,
	arrowBoxStyle,
	imgDotBoxStyle,
	imgDotStyle,
} from "@/components/Story/StoryDetail/StoryImgSlider.style";

const StoryImgSlider = ({ medias }: { medias: string[] }) => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const totalIndex = medias.length - 1;

	const wrapRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);

	const [mediaWidth, setMediaWidth] = useState(wrapRef.current?.offsetWidth);

	useEffect(() => {
		if (!wrapRef.current) return;

		setMediaWidth(wrapRef.current.offsetWidth);
	}, []);

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

		if (wrap === null) return;
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

		const scrollLeft = wrap.scrollLeft;

		let timer = null;

		if (timer !== null) {
			clearTimeout(timer);
		}

		timer = setTimeout(function () {
			setSliderIndex(Math.round(scrollLeft / wrap.clientWidth));
		}, 150);
	};

	return (
		<Flex css={layoutStyle}>
			<div css={imgBoxStyle} ref={wrapRef} onScroll={detectScroll}>
				<div css={sliderBoxStyle(`${(totalIndex + 1) * 100}%`)} ref={sliderRef}>
					{medias.map((media) => (
						<img key={media} src={media} alt="img" css={imgStyle(mediaWidth)} />
					))}
				</div>
			</div>
			<Flex
				css={arrowBoxStyle(sliderIndex === 0)}
				onClick={handleLeftArrowClick}
				className="leftArrow"
			>
				<LeftArrowIcon />
			</Flex>
			<Flex
				css={arrowBoxStyle(sliderIndex === totalIndex)}
				onClick={handleRightArrowClick}
				className="rightArrow"
			>
				<RightArrowIcon />
			</Flex>
			<Flex css={imgDotBoxStyle}>
				{totalIndex > 0 &&
					[...Array(totalIndex + 1)].map((_, index) => (
						<div key={index} css={imgDotStyle(sliderIndex === index)} />
					))}
			</Flex>
		</Flex>
	);
};

export default React.memo(StoryImgSlider);
