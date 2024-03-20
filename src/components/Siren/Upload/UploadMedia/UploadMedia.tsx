import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";

import { useDragAndDrop } from "@/hooks/useDragAndDrop";

import { uploadMediaBoxStyle } from "@/components/Siren/Upload/UploadMedia/UploadMedia.style";

interface UploadMediaProps {
	handleImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
	dropImgUpload: (e: React.DragEvent<HTMLDivElement>) => void;
}

const UploadMedia = ({ handleImgUpload, dropImgUpload }: UploadMediaProps) => {
	const { isDragOver, handleDragIn, handleDragOut, handleDragOver, handleDrop } =
		useDragAndDrop(dropImgUpload);

	return (
		<Flex
			css={uploadMediaBoxStyle(isDragOver)}
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

export default UploadMedia;
