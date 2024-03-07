import { Flex, SliderArrow } from "@/components/common";

import {
	layoutStyle,
	imgBoxStyle,
} from "@/components/Story/StoryUpload/StoryEdit/StoryEditSlider.style";

const StoryEditSlider = ({
	imgUrls,
	mediaCurrentIndex,
	setMediaCurrentIndex,
}: {
	imgUrls: string[];
	mediaCurrentIndex: number;
	setMediaCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const totalIndex = imgUrls.length;

	const handleLeftArrowClick = () => {
		setMediaCurrentIndex((prev) => (prev !== 0 ? prev - 1 : prev));
	};

	const handleRightArrowClick = () => {
		setMediaCurrentIndex((prev) => (prev < imgUrls.length ? prev + 1 : prev));
	};

	return (
		<Flex css={layoutStyle}>
			<div css={imgBoxStyle}>
				<img src={imgUrls[mediaCurrentIndex]} alt="mediaImg" />
			</div>

			{totalIndex > 1 && (
				<SliderArrow
					sliderIndex={mediaCurrentIndex}
					totalIndex={totalIndex}
					handleLeftArrow={handleLeftArrowClick}
					handleRightArrow={handleRightArrowClick}
				/>
			)}
		</Flex>
	);
};

export default StoryEditSlider;
