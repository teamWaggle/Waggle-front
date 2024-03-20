import { useEffect } from "react";

import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import GallerySlider from "@/components/common/Carousel/Gallery/GallerySlider/GallerySlider";

import { useImgUpload } from "@/hooks/useImgUpload";

import {
	galleryIconBoxStyle,
	galleryBoxStyle,
	galleryPlusIconBoxStyle,
} from "@/components/common/Carousel/Gallery/Gallery.style";

interface GalleryProps {
	isGalleryOpen: boolean;
	handleGalleryOpen: () => void;
	galleryRef: React.RefObject<HTMLDivElement>;
	mediaCurrentIndex: number;
	updatedMediaList?: string[];
	setUpdateMediaList?: React.Dispatch<React.SetStateAction<string[]>>;
	handleMoveImage: (imgIndex: number) => void;
}

const Gallery = ({
	isGalleryOpen,
	handleGalleryOpen,
	galleryRef,
	setUpdateMediaList,
	mediaCurrentIndex,
	updatedMediaList,
	handleMoveImage,
}: GalleryProps) => {
	const { isLoading, uploadMediaList, handleImgUpload } = useImgUpload();

	useEffect(() => {
		if (!isLoading && setUpdateMediaList) {
			setUpdateMediaList((prev) => [...prev, ...uploadMediaList]);
		}
	}, [isLoading]);

	return (
		<div css={galleryIconBoxStyle} ref={galleryRef}>
			<GalleryIcon onClick={handleGalleryOpen} />

			{isGalleryOpen && (
				<Flex css={galleryBoxStyle}>
					<GallerySlider
						mediaCurrentIndex={mediaCurrentIndex}
						updatedMediaList={updatedMediaList}
						setUpdateMediaList={setUpdateMediaList}
						handleMoveImage={handleMoveImage}
					/>

					<label css={galleryPlusIconBoxStyle} htmlFor="media">
						<PlusIcon />
					</label>
					<input
						type="file"
						multiple
						id="media"
						onChange={(e) => handleImgUpload(e, updatedMediaList, true)}
						accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
					/>
				</Flex>
			)}
		</div>
	);
};

export default Gallery;
