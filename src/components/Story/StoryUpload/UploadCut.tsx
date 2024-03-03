import { useState, useRef, useCallback } from "react";

import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import PrevArrowIcon from "@/assets/svg/ic-left-arrow-primary.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow-slider.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";
import RightArrowIcon from "@/assets/svg/ic-right-arrow-slider.svg?react";

import { Flex, Text } from "@/components/common";
import CutImgUnit from "@/components/Story/StoryUpload/CutImgUnit";
import GallerySlider from "@/components/Story/StoryUpload/GallerySlider";

import useClickOutSide from "@/hooks/useClickOutSide";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { FileProp } from "@/types/upload";

import {
	layoutStyle,
	headerStyle,
	imgBoxStyle,
	galleryIconBoxStyle,
	galleryBoxStyle,
	galleryPlusIconBoxStyle,
	imgDotBoxStyle,
	imgDotStyle,
	arrowBoxStyle,
} from "@/components/Story/StoryUpload/UploadCut.style";

type HandlingType = "ratio" | "resize" | "gallery" | null | "first";

const UploadCut = ({ medias }: { medias: FileProp[] }) => {
	const [mediaCurrentIndex, setMediaCurrentIndex] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [file, setFile] = useState<FileProp[]>(medias);

	const [handlingMode, setHandlingMode] = useState<HandlingType>("first");
	const [, setRatioState] = useState<boolean | null>(null);
	const [, setResizeState] = useState<boolean | null>(null);
	const [, setGalleryState] = useState<boolean | null>(null);

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
			const widthGap = (imgRef.current.offsetWidth * (scale / 100 + 1) - 1) / 2 / 740;

			const heightGap = (imgRef.current.offsetHeight * (scale / 100 + 1) - 1) / 2 / 740;

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
			imgUrlList.push({
				url: img.src,
				translateX: 0,
				translateY: 0,
				scale: 0,
				grabbedPosition: { x: 0, y: 0 },
			});
		}

		setFile((prev) => [...prev, ...imgUrlList]);
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
				{/* <img src={file[mediaCurrentIndex].url} alt="sample" /> */}

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
