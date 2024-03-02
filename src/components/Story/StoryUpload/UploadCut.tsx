import { useState } from "react";

import SampleImg from "@/assets/png/post-sample.png";
import PlusIcon from "@/assets/svg/ic-gallery-plus.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow-primary.svg?react";
import GalleryIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex, Text } from "@/components/common";
import GallerySlider from "@/components/Story/StoryUpload/GallerySlider";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	headerStyle,
	imgBoxStyle,
	galleryIconBoxStyle,
	galleryBoxStyle,
	galleryPlusIconBoxStyle,
} from "@/components/Story/StoryUpload/UploadCut.style";

const UploadCut = () => {
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [fileURL, setFileURL] = useState<string[]>([]);

	const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.currentTarget.files;
		const imgUrlList: string[] = [];

		if (!files) {
			return;
		}

		for (let i = 0; i < files.length; i++) {
			const img = new Image();
			img.src = URL.createObjectURL(files[i]);
			imgUrlList.push(img.src);
		}

		setFileURL(imgUrlList);
	};

	return (
		<Flex css={layoutStyle}>
			<Flex css={headerStyle}>
				<LeftArrowIcon />
				<Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 600)}>
					자르기
				</Text>
			</Flex>

			<Flex css={imgBoxStyle}>
				<img src={SampleImg} alt="sample" />

				<Flex css={galleryIconBoxStyle} onClick={() => setIsGalleryOpen(true)}>
					<GalleryIcon />

					{isGalleryOpen && (
						<Flex css={galleryBoxStyle}>
							<GallerySlider medias={fileURL} />

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
				</Flex>
			</Flex>
		</Flex>
	);
};

export default UploadCut;
