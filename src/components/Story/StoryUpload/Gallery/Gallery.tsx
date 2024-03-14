import { useEffect } from "react";

import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import GallerySlider from "@/components/Story/StoryUpload/Gallery/GallerySlider/GallerySlider";

import { useImgUpload } from "@/hooks/useImgUpload";

import {
	galleryIconBoxStyle,
	galleryBoxStyle,
	galleryPlusIconBoxStyle,
} from "@/components/Story/StoryUpload/Gallery/Gallery.style";

interface GalleryProps {
	isGalleryOpen: boolean;
	setIsGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
	galleryRef: React.RefObject<HTMLDivElement>;
	mediaCurrentIndex: number;
	setMediaCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	updatedMediaList: string[];
	setUpdateMediaList: React.Dispatch<React.SetStateAction<string[]>>;
}

const Gallery = ({
	isGalleryOpen,
	setIsGalleryOpen,
	galleryRef,
	setUpdateMediaList,
	mediaCurrentIndex,
	updatedMediaList,
	setMediaCurrentIndex,
}: GalleryProps) => {
	const { isLoading, updateMediaList, handleImgUpdate } = useImgUpload();

	useEffect(() => {
		if (!isLoading) {
			setUpdateMediaList((prev) => [...prev, ...updateMediaList]);
		}
	}, [isLoading]);

	return (
		<div css={galleryIconBoxStyle} ref={galleryRef}>
			<GalleryIcon onClick={() => setIsGalleryOpen((prev) => !prev)} />

			{isGalleryOpen && (
				<Flex css={galleryBoxStyle}>
					<GallerySlider
						mediaCurrentIndex={mediaCurrentIndex}
						setMediaCurrentIndex={setMediaCurrentIndex}
						updatedMediaList={updatedMediaList}
						setUpdateMediaList={setUpdateMediaList}
					/>

					<label css={galleryPlusIconBoxStyle} htmlFor="media">
						<PlusIcon />
					</label>
					<input
						type="file"
						multiple
						id="media"
						onChange={(e) => handleImgUpdate(e, updatedMediaList, true)}
						accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
					/>
				</Flex>
			)}
		</div>
	);
};

export default Gallery;
