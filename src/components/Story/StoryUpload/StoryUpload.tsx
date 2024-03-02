import { useState, useEffect } from "react";

import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";
// import StoryContent from "@/components/Story/StoryUpload/StoryContent";
import UploadCut from "@/components/Story/StoryUpload/UploadCut";

import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { layoutStyle, labelStyle } from "@/components/Story/StoryUpload/StoryUpload.style";

const StoryUpload = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [fileURL, setFileURL] = useState<string[]>([]);
	const [fileUpload, setFileUpload] = useState(false);
	const [isDragOver, setIsDragOver] = useState(false);

	const modal = useModal();

	const handleDragIn = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		setIsDragOver(false);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.dataTransfer!.files) {
			setIsDragOver(true);
		}
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragOver(false);

		if (!e.dataTransfer) {
			return;
		}

		const dropFiles = e.dataTransfer.files;
		const imgUrlList: string[] = [];

		for (let i = 0; i < dropFiles.length; i++) {
			const img = new Image();
			img.src = URL.createObjectURL(dropFiles[i]);
			imgUrlList.push(img.src);
		}

		setFileURL(imgUrlList);
		setFileUpload(true);
	};

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
		setFileUpload(true);
	};

	useEffect(() => {
		if (fileUpload) {
			modal.closeModal();

			// modal.openModal({
			// 	key: `StoryContentModal`,
			// 	component: () => <StoryContent media={fileURL} />,
			// });

			modal.openModal({
				key: `UploadCutModal`,
				component: () => <UploadCut medias={fileURL} />,
			});
		}
	}, [fileUpload]);

	return (
		<Flex
			css={layoutStyle(isDragOver)}
			onDrop={handleDrop}
			onDragEnter={handleDragIn}
			onDragLeave={handleDragOut}
			onDragOver={handleDragOver}
		>
			<UploadMediaIcon />
			<Text size="xLarge" css={getDefaultTextStyle(Theme.color.white, 600)}>
				사진과 동영상을 여기다 끌어다 놓으세요
			</Text>
			<label htmlFor="media" css={labelStyle}>
				<Text size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
					컴퓨터에서 선택
				</Text>
			</label>
			<input
				type="file"
				multiple
				id="media"
				onChange={handleChangeImg}
				accept="image/jpeg, image/png, image/heic, image/heif"
			/>
		</Flex>
	);
};

export default StoryUpload;
