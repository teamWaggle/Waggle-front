import { useState, useRef, useCallback, Fragment } from "react";

import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import PrevArrowIcon from "@/assets/svg/ic-left-arrow-primary.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";
import CutIcon from "@/assets/svg/upload/ic-cut.svg?react";
import FatRectangleIcon from "@/assets/svg/upload/ic-fat-rectangle.svg?react";
import OrigianlIcon from "@/assets/svg/upload/ic-original.svg?react";
import SquareIcon from "@/assets/svg/upload/ic-square-cut.svg?react";
import ThinRectangleIcon from "@/assets/svg/upload/ic-thin-rectangle.svg?react";

import { Flex, Text } from "@/components/common";
import CutImgUnit from "@/components/Story/StoryUpload/CutImgUnit";
import GallerySlider from "@/components/Story/StoryUpload/GallerySlider";

import useClickOutSide from "@/hooks/useClickOutSide";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { FileProp, SizeType } from "@/types/upload";

import {
	layoutStyle,
	headerStyle,
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

type HandlingType = "ratio" | "resize" | "gallery" | null | "first";

const SIZE_MENU: {
	text: string;
	icon: React.ReactNode;
	type: SizeType;
}[] = [
	{ text: "원본", icon: <OrigianlIcon />, type: "original" },
	{ text: "1:1", icon: <SquareIcon />, type: "square" },
	{ text: "4:5", icon: <ThinRectangleIcon />, type: "thin" },
	{ text: "16:9", icon: <FatRectangleIcon />, type: "fat" },
];

const getRatioCalculatedBoxWidth = (sizeType: SizeType, currentWidth: number) => {
	switch (sizeType) {
		case "thin":
			return currentWidth * 0.8;
		default:
			return currentWidth;
	}
};

const getRatioCalculatedBoxHeight = (sizeType: SizeType, currentWidth: number) => {
	switch (sizeType) {
		case "original":
			return currentWidth / 1.93;
		case "fat":
			return (currentWidth * 9) / 16;
		default:
			return currentWidth;
	}
};

export const getProcessedMinSize = (
	processedCurrentWidth: number,
	imageSize: number,
	sizeMode: SizeType,
): {
	minWidth: number;
	minHeight: number;
} => {
	if (sizeMode !== "square") {
		switch (sizeMode) {
			case "thin":
				if (imageSize > 1) {
					return {
						minWidth: processedCurrentWidth * imageSize,
						minHeight: processedCurrentWidth,
					};
				} else {
					return {
						minWidth: processedCurrentWidth * 0.8,
						minHeight: (processedCurrentWidth * 0.8) / imageSize,
					};
				}
			case "original":
				return {
					minWidth: processedCurrentWidth,
					minHeight: processedCurrentWidth / imageSize,
				};
			case "fat":
				return {
					minWidth: processedCurrentWidth,
					minHeight: processedCurrentWidth / imageSize,
				};
		}
	} else {
		if (imageSize > 1) {
			return {
				minWidth: processedCurrentWidth * imageSize,
				minHeight: processedCurrentWidth,
			};
		} else {
			return {
				minWidth: processedCurrentWidth,
				minHeight: processedCurrentWidth / imageSize,
			};
		}
	}
};

const UploadCut = ({ medias }: { medias: FileProp[] }) => {
	const [mediaCurrentIndex, setMediaCurrentIndex] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [isCutOpen, setIsCutOpen] = useState(false);
	const [file, setFile] = useState<FileProp[]>(medias);

	const [sizeMode, setSizeMode] = useState<SizeType>("original");

	const [handlingMode, setHandlingMode] = useState<HandlingType>("first");
	const [, setRatioState] = useState<boolean | null>(null);
	const [, setResizeState] = useState<boolean | null>(null);
	const [, setGalleryState] = useState<boolean | null>(null);

	const currentWidth = 730;

	const galleryRef = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLDivElement>(null);

	useClickOutSide(galleryRef, () => setIsGalleryOpen(false));

	const toggleInputState = useCallback((type: HandlingType) => {
		switch (type) {
			case "ratio":
				setRatioState((prev) => (prev === true ? false : true));
				setResizeState((prev) => (prev !== null ? false : null));
				setGalleryState((prev) => (prev !== null ? false : null));
				break;
			case "resize":
				setResizeState((prev) => (prev === true ? false : true));
				setRatioState((prev) => (prev !== null ? false : null));
				setGalleryState((prev) => (prev !== null ? false : null));
				break;
			case "gallery":
				setGalleryState((prev) => (prev === true ? false : true));
				setRatioState((prev) => (prev !== null ? false : null));
				setResizeState((prev) => (prev !== null ? false : null));
				break;
		}
	}, []);

	const fixOverTranformedImg = useCallback(
		(scale: number) => {
			if (!imgRef.current) return;
			const widthGap =
				(imgRef.current.offsetWidth * (scale / 100 + 1) -
					getRatioCalculatedBoxWidth(sizeMode, currentWidth)) /
				2 /
				file[mediaCurrentIndex].width;

			const heightGap =
				(imgRef.current.offsetHeight * (scale / 100 + 1) -
					getRatioCalculatedBoxHeight(sizeMode, currentWidth)) /
				2 /
				file[mediaCurrentIndex].width;

			const currentFile = file[mediaCurrentIndex];

			if (widthGap === 0) {
				currentFile.translateX = 0;
			} else {
				if (currentFile.translateX > widthGap) {
					currentFile.translateX = widthGap;
				} else if (currentFile.translateX < -widthGap) {
					currentFile.translateX = -widthGap;
				}
			}
			if (heightGap === 0) {
				currentFile.translateY = 0;
			} else {
				if (currentFile.translateY > heightGap) {
					currentFile.translateY = heightGap;
				} else if (currentFile.translateY < -heightGap) {
					currentFile.translateY = -heightGap;
				}
			}
		},
		[mediaCurrentIndex],
	);

	const handleLeftArrowClick = () => {
		if (mediaCurrentIndex === 0) return;

		setMediaCurrentIndex((prev) => prev - 1);
	};

	const handleRightArrowClick = () => {
		if (mediaCurrentIndex === file.length - 1) return;

		setMediaCurrentIndex((prev) => prev + 1);
	};

	const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.currentTarget.files;
		const imgUrlList: FileProp[] = [];

		if (!files) {
			return;
		}

		for (let i = 0; i < files.length; i++) {
			const img = new Image();
			img.src = URL.createObjectURL(files[i]);
			img.onload = () => {
				imgUrlList.push({
					url: img.src,
					width: img.width,
					height: img.height,
					size: img.width / img.height,
					translateX: 0,
					translateY: 0,
					scale: 0,
					grabbedPosition: { x: 0, y: 0 },
				});

				if (img.complete) {
					setFile((prev) => [...prev, ...imgUrlList]);
				}
			};
		}
	};

	return (
		<Flex css={layoutStyle}>
			<Flex css={headerStyle}>
				<PrevArrowIcon />
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 600)}>
					자르기
				</Text>
			</Flex>

			<Flex css={imgBoxStyle}>
				<div css={galleryIconBoxStyle} ref={galleryRef}>
					<GalleryIcon onClick={() => setIsGalleryOpen((prev) => !prev)} />

					{isGalleryOpen && (
						<Flex css={galleryBoxStyle}>
							<GallerySlider
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
								onChange={handleChangeImg}
								accept="image/jpeg, image/png, image/heic, image/heif"
							/>
						</Flex>
					)}
				</div>
				<div css={cutIconBoxStyle}>
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
					css={arrowBoxStyle(mediaCurrentIndex === file.length - 1)}
					onClick={handleRightArrowClick}
					className="rightArrow"
				>
					<RightArrowIcon width={40} height={40} />
				</Flex>
				<Flex css={imgDotBoxStyle}>
					{file.length > 0 &&
						[...Array(file.length)].map((_, index) => (
							<div key={index} css={imgDotStyle(mediaCurrentIndex === index)} />
						))}
				</Flex>

				<CutImgUnit
					currentFile={file[mediaCurrentIndex]}
					sizeMode={sizeMode}
					processedCurrentWidth={currentWidth}
					imgRef={imgRef}
					onGrabStart={() => {
						setHandlingMode(null);
						toggleInputState(handlingMode);
					}}
					onFixTransform={fixOverTranformedImg}
				/>
			</Flex>
		</Flex>
	);
};

export default UploadCut;
