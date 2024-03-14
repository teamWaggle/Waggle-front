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
	prevImgUrls: string[];
	mediaCurrentIndex: number;
	setMediaCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	// editMediaList: string[];
	// setEditMediaList: React.Dispatch<React.SetStateAction<string[]>>;
	// setDeletedMediaList: React.Dispatch<React.SetStateAction<string[]>>;
	setUpdateMediaList: React.Dispatch<React.SetStateAction<string[]>>;
}
// editMediaList,
// setEditMediaList,
// setDeletedMediaList,

const Gallery = ({
	isGalleryOpen,
	setIsGalleryOpen,
	galleryRef,
	setUpdateMediaList,
	prevImgUrls,
	mediaCurrentIndex,
	setMediaCurrentIndex,
}: GalleryProps) => {
	const { isLoading, imgUrls, updateMediaList, handleImgUpdate } = useImgUpload();

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
						prevImgUrls={imgUrls.length === 0 ? prevImgUrls : imgUrls}
						mediaCurrentIndex={mediaCurrentIndex}
						setMediaCurrentIndex={setMediaCurrentIndex}
						// editMediaList={editMediaList}
						// setEditMediaList={setEditMediaList}
						// setDeletedMediaList={setDeletedMediaList}
					/>

					<label css={galleryPlusIconBoxStyle} htmlFor="media">
						<PlusIcon />
					</label>
					<input
						type="file"
						multiple
						id="media"
						onChange={(e) => handleImgUpdate(e, prevImgUrls, true)}
						accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
					/>
				</Flex>
			)}
		</div>
	);
};

export default Gallery;
