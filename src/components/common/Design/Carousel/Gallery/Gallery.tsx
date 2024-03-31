import { useEffect } from "react";

import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import GallerySlider from "@/components/common/Design/Carousel/Gallery/GallerySlider/GallerySlider";

import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

import type { QuestionFormData } from "@/types/question";
import type { SirenFormData } from "@/types/siren";

import {
	galleryIconBoxStyle,
	galleryBoxStyle,
	galleryPlusIconBoxStyle,
} from "@/components/common/Design/Carousel/Gallery/Gallery.style";

interface GalleryProps {
	isGalleryOpen: boolean;
	handleGalleryOpen: () => void;
	galleryRef: React.RefObject<HTMLDivElement>;
	mediaCurrentIndex: number;
	updatedMediaList?: string[];
	sirenUpdateInputValue?: <Key extends keyof SirenFormData>(
		key: Key,
		value: SirenFormData[Key],
	) => void;
	questionUpdateInputValue?: <Key extends keyof QuestionFormData>(
		key: Key,
		value: QuestionFormData[Key],
	) => void;
	// updateInputValue?:
	// 	| (<Key extends keyof SirenFormData>(key: Key, value: SirenFormData[Key]) => void)
	// 	| (<Key extends keyof QuestionFormData>(key: Key, value: QuestionFormData[Key]) => void);
	handleMoveImage: (imgIndex: number) => void;
}

const Gallery = ({
	isGalleryOpen,
	handleGalleryOpen,
	galleryRef,
	mediaCurrentIndex,
	updatedMediaList,
	sirenUpdateInputValue,
	questionUpdateInputValue,
	handleMoveImage,
}: GalleryProps) => {
	const { isLoading, uploadMediaList, handleImgUpload } = useMultipleImgUpload({
		updateMediaList: updatedMediaList,
	});

	console.log(updatedMediaList);
	console.log(uploadMediaList);

	useEffect(() => {
		if (!isLoading) {
			if (sirenUpdateInputValue) {
				sirenUpdateInputValue("mediaList", uploadMediaList);
			} else if (questionUpdateInputValue) {
				questionUpdateInputValue("mediaList", uploadMediaList);
			}
		}
	}, [isLoading]);

	return (
		<div css={galleryIconBoxStyle} ref={galleryRef}>
			<GalleryIcon onClick={handleGalleryOpen} />

			{isGalleryOpen && (
				<Flex css={galleryBoxStyle}>
					<GallerySlider
						mediaCurrentIndex={mediaCurrentIndex}
						updatedMediaList={uploadMediaList}
						handleMoveImage={handleMoveImage}
						sirenUpdateInputValue={sirenUpdateInputValue}
						questionUpdateInputValue={questionUpdateInputValue}
					/>

					<label css={galleryPlusIconBoxStyle} htmlFor="media">
						<PlusIcon />
					</label>
					<input
						type="file"
						multiple
						id="media"
						onChange={(e) => handleImgUpload(e)}
						accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
					/>
				</Flex>
			)}
		</div>
	);
};

export default Gallery;
