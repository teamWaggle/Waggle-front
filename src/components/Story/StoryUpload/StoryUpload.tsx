import { useState, useEffect } from "react";

import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";
import UploadCut from "@/components/Story/StoryUpload/UploadCut";

import { useImgUpload } from "@/hooks/useImgUpload";
import useModal from "@/hooks/useModal";

import { layoutStyle } from "@/components/Story/StoryUpload/StoryUpload.style";

const StoryUpload = () => {
	const [isDragOver, setIsDragOver] = useState(false);

	const modal = useModal();

	const { isLoading, imgUrls, fileList, handleImgUpload, dropImgUpload } = useImgUpload();

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

	useEffect(() => {
		if (!isLoading) {
			modal.closeModal();

			modal.openModal({
				key: `UploadCutModal`,
				component: () => <UploadCut imgUrls={imgUrls} fileList={fileList} />,
				notCloseIcon: true,
			});
		}
	}, [isLoading]);

	return (
		<Flex
			css={layoutStyle(isDragOver)}
			onDrop={dropImgUpload}
			onDragEnter={handleDragIn}
			onDragLeave={handleDragOut}
			onDragOver={handleDragOver}
		>
			<UploadMediaIcon />
			<Text size="xLarge">사진과 동영상을 여기다 끌어다 놓으세요</Text>
			<label htmlFor="media">
				<Text size="large">컴퓨터에서 선택</Text>
			</label>
			<input
				type="file"
				multiple={true}
				id="media"
				onChange={(e) => handleImgUpload(e, [])}
				accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
			/>
		</Flex>
	);
};

export default StoryUpload;
