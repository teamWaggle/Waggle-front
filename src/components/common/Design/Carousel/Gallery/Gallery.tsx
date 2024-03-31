import { useEffect } from "react";

import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import GallerySlider from "@/components/common/Design/Carousel/Gallery/GallerySlider/GallerySlider";

import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

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
	updateInputValue?: <Key extends keyof SirenFormData>(key: Key, value: SirenFormData[Key]) => void;
	handleMoveImage: (imgIndex: number) => void;
}

const Gallery = ({
	isGalleryOpen,
	handleGalleryOpen,
	galleryRef,
	mediaCurrentIndex,
	updatedMediaList,
	updateInputValue,
	handleMoveImage,
}: GalleryProps) => {
	const { isLoading, uploadMediaList, handleImgUpload } = useMultipleImgUpload({
		updateMediaList: updatedMediaList,
	});

	useEffect(() => {
		if (!isLoading && updateInputValue) {
			updateInputValue("mediaList", uploadMediaList);
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
						updateInputValue={updateInputValue}
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
