import { useState, useRef, Fragment } from "react";

import PrevArrowIcon from "@/assets/svg/ic-left-arrow-primary.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";
import CutIcon from "@/assets/svg/upload/ic-cut.svg?react";

// import CutImgUnit from "@/components/Story/StoryUpload/CutImgUnit";
import { Flex, Text } from "@/components/common";
import Gallery from "@/components/Story/StoryUpload/Gallery/Gallery";
import StoryContent from "@/components/Story/StoryUpload/StoryContent";
import UploadWarningModal from "@/components/Story/StoryUpload/UploadWarningModal";

import { SIZE_MENU } from "@/constants/upload";

import useClickOutSide from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { SizeType } from "@/types/upload";

import {
	layoutStyle,
	headerStyle,
	nextButtonStyle,
	imgBoxStyle,
	cutIconBoxStyle,
	cutBoxStyle,
	cutItemBoxStyle,
	dividerStyle,
	imgDotBoxStyle,
	imgDotStyle,
	arrowBoxStyle,
} from "@/components/Story/StoryUpload/UploadCut.style";

const UploadCut = ({ imgUrls, fileList }: { imgUrls: string[]; fileList: File[] }) => {
	const [mediaCurrentIndex, setMediaCurrentIndex] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [isCutOpen, setIsCutOpen] = useState(false);
	const [sizeMode, setSizeMode] = useState<SizeType>("original");

	const galleryRef = useRef<HTMLDivElement>(null);
	const cutRef = useRef<HTMLDivElement>(null);

	const modal = useModal();

	useClickOutSide(galleryRef, () => setIsGalleryOpen(false));
	useClickOutSide(cutRef, () => setIsCutOpen(false));

	const handlePrevButtonClick = () => {
		modal.openModal({
			key: `UploadWarningModal`,
			component: () => <UploadWarningModal />,
			isUpper: true,
			notCloseIcon: true,
		});
	};

	const handleNextButtonClick = () => {
		modal.closeModal();

		modal.openModal({
			key: `StoryContentModal`,
			component: () => <StoryContent imgUrls={imgUrls} fileList={fileList} />,
		});
	};

	const handleLeftArrowClick = () => {
		if (mediaCurrentIndex === 0) return;

		setMediaCurrentIndex((prev) => prev - 1);
	};

	const handleRightArrowClick = () => {
		if (mediaCurrentIndex === imgUrls.length - 1) return;

		setMediaCurrentIndex((prev) => prev + 1);
	};

	return (
		<Flex css={layoutStyle}>
			<Flex css={headerStyle}>
				<PrevArrowIcon onClick={handlePrevButtonClick} />
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 600)}>
					자르기
				</Text>
				<Text size="xLarge" css={nextButtonStyle} onClick={handleNextButtonClick}>
					다음
				</Text>
			</Flex>

			<Flex css={imgBoxStyle}>
				<img src={imgUrls[mediaCurrentIndex]} />
				<Gallery
					isGalleryOpen={isGalleryOpen}
					setIsGalleryOpen={setIsGalleryOpen}
					galleryRef={galleryRef}
					prevImgUrls={imgUrls}
					mediaCurrentIndex={mediaCurrentIndex}
					setMediaCurrentIndex={setMediaCurrentIndex}
				/>

				<div css={cutIconBoxStyle} ref={cutRef}>
					<CutIcon onClick={() => setIsCutOpen((prev) => !prev)} />

					{isCutOpen && (
						<Flex css={cutBoxStyle}>
							{SIZE_MENU.map((sizeMenu, index) => (
								<Fragment key={sizeMenu.text}>
									<Flex
										css={cutItemBoxStyle}
										className={sizeMenu.type === sizeMode ? "active" : ""}
										onClick={() => setSizeMode(sizeMenu.type)}
									>
										<Text>{sizeMenu.text}</Text>
										{sizeMenu.icon}
									</Flex>

									{index < SIZE_MENU.length - 1 && <div css={dividerStyle} />}
								</Fragment>
							))}
						</Flex>
					)}
				</div>
				<Flex
					css={arrowBoxStyle(mediaCurrentIndex === 0)}
					onClick={handleLeftArrowClick}
					className="leftArrow"
				>
					<LeftArrowIcon width={40} height={40} />
				</Flex>
				<Flex
					css={arrowBoxStyle(mediaCurrentIndex === imgUrls.length - 1)}
					onClick={handleRightArrowClick}
					className="rightArrow"
				>
					<RightArrowIcon width={40} height={40} />
				</Flex>
				<Flex css={imgDotBoxStyle}>
					{imgUrls.length > 1 &&
						[...Array(imgUrls.length)].map((_, index) => (
							<div key={index} css={imgDotStyle(mediaCurrentIndex === index)} />
						))}
				</Flex>
				{/* 
				<CutImgUnit
					currentFile={file[mediaCurrentIndex]}
					sizeMode={sizeMode}
					currentWidth={currentWidth}
					imgRef={imgRef}
				/> */}
			</Flex>
		</Flex>
	);
};

export default UploadCut;
