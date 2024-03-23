import { useEffect } from "react";

import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";
import StoryContent from "@/components/Story/StoryUpload/StoryContent";

import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import useModal from "@/hooks/useModal";
import { useMultipleImgUpload } from "@/hooks/useMultipleImgUpload";

import { layoutStyle } from "@/components/Story/StoryUpload/StoryUpload.style";

const StoryUpload = () => {
	const modal = useModal();

	const { isLoading, uploadMediaList, handleImgUpload, dropImgUpload } = useMultipleImgUpload();

	const { isDragOver, handleDragIn, handleDragOut, handleDragOver, handleDrop } =
		useDragAndDrop(dropImgUpload);

	useEffect(() => {
		if (!isLoading) {
			modal.closeModal();

			modal.openModal({
				key: `StoryContentModal`,
				component: () => <StoryContent uploadMediaList={uploadMediaList} />,
			});
		}
	}, [isLoading]);

	return (
		<Flex
			css={layoutStyle(isDragOver)}
			onDrop={handleDrop}
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
				onChange={handleImgUpload}
				accept="image/jpeg, image/png, image/heic, image/heif, image/jpg"
			/>
		</Flex>
	);
};

export default StoryUpload;
