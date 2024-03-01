import { useState, useEffect, useRef } from "react";

import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";

import { Flex } from "@/components/common";

import {
	layoutStyle,
	imgBoxStyle,
	sliderBoxStyle,
	imgStyle,
	arrowBoxStyle,
} from "@/components/Story/StoryDetail/StoryImgSlider.style";

const StoryImgSlider = ({ medias }: { medias: string[] }) => {
	const [sliderIndex] = useState(0);
	const [mediaWidth, setMediaWidth] = useState(0);
	const totalIndex = medias.length;

	const wrapRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);

	console.log(medias);
	console.log(sliderIndex);
	console.log(totalIndex);
	console.log(mediaWidth);

	const handleLeftArrowClick = () => {
		const wrap = wrapRef.current;

		if (wrap === null) {
			return;
		}

		if (sliderIndex <= 0) {
			return;
		}

		wrap.scrollBy({
			left: -wrap.clientWidth,
			behavior: "smooth",
		});
	};

	const handleRightArrowClick = () => {
		const wrap = wrapRef.current;

		if (wrap === null) {
			return;
		}

		if (sliderIndex >= totalIndex) {
			return;
		}

		wrap.scrollBy({
			left: wrap.clientWidth,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const handleMediaWidth = () => {
			if (!wrapRef.current) {
				return;
			}

			setMediaWidth(wrapRef.current.offsetWidth);
		};
		handleMediaWidth();
	}, []);

	return (
		<Flex css={layoutStyle}>
			<div css={imgBoxStyle} ref={wrapRef}>
				<div css={sliderBoxStyle(`${totalIndex * 100}%`)} ref={sliderRef}>
					{medias.map((media) => (
						<img key={media} src={media} alt="img" css={imgStyle(mediaWidth)} />
					))}
				</div>
			</div>
			<Flex css={arrowBoxStyle("left")} onClick={handleLeftArrowClick}>
				<LeftArrowIcon />
			</Flex>
			<Flex css={arrowBoxStyle("right")} onClick={handleRightArrowClick}>
				<RightArrowIcon />
			</Flex>
		</Flex>
	);
};

export default StoryImgSlider;
