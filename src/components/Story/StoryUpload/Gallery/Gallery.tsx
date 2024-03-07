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
	setEditMediaList,
	setUpdateFileList,
}: GalleryProps) => {
	const { isLoading, imgUrls, handleUpdateImgUpload, updateFileList } = useImgUpload({
		initialImgName: [],
	});

	useEffect(() => {
		if (!isLoading) {
			setEditMediaList(imgUrls);
			setUpdateFileList(updateFileList);
		}
	}, [isLoading]);

	return (
		<div css={galleryIconBoxStyle} ref={galleryRef}>
			<GalleryIcon onClick={() => setIsGalleryOpen((prev) => !prev)} />

			{isGalleryOpen && (
				<Flex css={galleryBoxStyle}>
					<GallerySlider
						prevImgUrls={imgUrls.length === 0 ? prevImgUrls : imgUrls}
						// medias={file}
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
						onChange={(e) => handleUpdateImgUpload(e, prevImgUrls)}
						accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
					/>
				</Flex>
			)}
		</div>
	);
};

export default Gallery;
