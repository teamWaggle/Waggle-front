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
	editMediaList: string[];
	setEditMediaList: React.Dispatch<React.SetStateAction<string[]>>;
	setUpdateFileList: React.Dispatch<React.SetStateAction<File[]>>;
}

const Gallery = ({
	isGalleryOpen,
	setIsGalleryOpen,
	galleryRef,
	prevImgUrls,
	mediaCurrentIndex,
	setMediaCurrentIndex,
	editMediaList,
	setEditMediaList,
	setUpdateFileList,
}: GalleryProps) => {
	const { isLoading, imgUrls, handleImgUpload, fileList } = useImgUpload();

	useEffect(() => {
		if (!isLoading) {
			setEditMediaList(imgUrls);
			setUpdateFileList(fileList);
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
						editMediaList={editMediaList}
						setEditMediaList={setEditMediaList}
					/>

					<label css={galleryPlusIconBoxStyle} htmlFor="media">
						<PlusIcon />
					</label>
					<input
						type="file"
						multiple
						id="media"
						onChange={(e) => handleImgUpload(e, prevImgUrls, true)}
						accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
					/>
				</Flex>
			)}
		</div>
	);
};

export default Gallery;
