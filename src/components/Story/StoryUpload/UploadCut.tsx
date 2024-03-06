import { useState, useRef, Fragment } from "react";

import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import PrevArrowIcon from "@/assets/svg/ic-left-arrow-primary.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";
import CutIcon from "@/assets/svg/upload/ic-cut.svg?react";

import { Flex, Text } from "@/components/common";
// import CutImgUnit from "@/components/Story/StoryUpload/CutImgUnit";
import GallerySlider from "@/components/Story/StoryUpload/GallerySlider";
import StoryContent from "@/components/Story/StoryUpload/StoryContent";
import UploadWarningModal from "@/components/Story/StoryUpload/UploadWarningModal";

import { SIZE_MENU } from "@/constants/upload";

import useClickOutSide from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { FileProp, SizeType } from "@/types/upload";

import {
	layoutStyle,
	headerStyle,
	nextButtonStyle,
	imgBoxStyle,
	cutIconBoxStyle,
	cutBoxStyle,
	cutItemBoxStyle,
	dividerStyle,
	galleryIconBoxStyle,
	galleryBoxStyle,
	galleryPlusIconBoxStyle,
	imgDotBoxStyle,
	imgDotStyle,
	arrowBoxStyle,
} from "@/components/Story/StoryUpload/UploadCut.style";

const UploadCut = ({
	medias,
	imgUrls,
	fileList,
}: {
	medias: FileProp[];
	imgUrls: string[];
	fileList: File[];
}) => {
	const [mediaCurrentIndex, setMediaCurrentIndex] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [isCutOpen, setIsCutOpen] = useState(false);
	const [file] = useState<FileProp[]>(medias);
	const [sizeMode, setSizeMode] = useState<SizeType>("original");

	const galleryRef = useRef<HTMLDivElement>(null);
	const cutRef = useRef<HTMLDivElement>(null);
	// const imgRef = useRef<HTMLDivElement>(null);

	const modal = useModal();

	// const currentWidth = 730;

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
			component: () => <StoryContent medias={file} imgUrls={imgUrls} fileList={fileList} />,
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

	// const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const files = e.currentTarget.files;
	// 	const imgUrlList: FileProp[] = [];

	// 	if (!files) {
	// 		return;
	// 	}

	// 	for (let i = 0; i < files.length; i++) {
	// 		const img = new Image();
	// 		img.src = URL.createObjectURL(files[i]);
	// 		img.onload = () => {
	// 			imgUrlList.push({
	// 				url: img.src,
	// 				width: img.width,
	// 				height: img.height,
	// 				size: img.width / img.height,
	// 				translateX: 0,
	// 				translateY: 0,
	// 				scale: 0,
	// 				grabbedPosition: { x: 0, y: 0 },
	// 			});

	// 			if (img.complete) {
	// 				setFile((prev) => [...prev, ...imgUrlList]);
	// 			}
	// 		};
	// 	}
	// };

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
				<div css={galleryIconBoxStyle} ref={galleryRef}>
					<GalleryIcon onClick={() => setIsGalleryOpen((prev) => !prev)} />

					{isGalleryOpen && (
						<Flex css={galleryBoxStyle}>
							<GallerySlider
								imgUrls={imgUrls}
								medias={file}
								mediaCurrentIndex={mediaCurrentIndex}
								setMediaCurrentIndex={setMediaCurrentIndex}
							/>

							<label css={galleryPlusIconBoxStyle} htmlFor="media">
								<PlusIcon />
							</label>
							<input
								type="file"
								multiple
								id="media"
								onChange={() => {}}
								accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
							/>
						</Flex>
					)}
				</div>

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
