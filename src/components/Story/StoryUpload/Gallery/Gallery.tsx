import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import GallerySlider from "@/components/Story/StoryUpload/Gallery/GallerySlider/GallerySlider";

import {
	galleryIconBoxStyle,
	galleryBoxStyle,
	galleryPlusIconBoxStyle,
} from "@/components/Story/StoryUpload/Gallery/Gallery.style";

interface GalleryProps {
	isGalleryOpen: boolean;
	setIsGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
	galleryRef: React.RefObject<HTMLDivElement>;
	imgUrls: string[];
	mediaCurrentIndex: number;
	setMediaCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Gallery = ({
	isGalleryOpen,
	setIsGalleryOpen,
	galleryRef,
	imgUrls,
	mediaCurrentIndex,
	setMediaCurrentIndex,
}: GalleryProps) => {
	return (
		<div css={galleryIconBoxStyle} ref={galleryRef}>
			<GalleryIcon onClick={() => setIsGalleryOpen((prev) => !prev)} />

			{isGalleryOpen && (
				<Flex css={galleryBoxStyle}>
					<GallerySlider
						imgUrls={imgUrls}
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
						onChange={() => {}}
						accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
					/>
				</Flex>
			)}
		</div>
	);
};

export default Gallery;
