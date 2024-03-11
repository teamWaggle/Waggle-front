import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";

import { uploadMediaBoxStyle } from "@/components/Siren/Upload/UploadMedia/UploadMedia.style";

const UploadMedia = ({
	handleImgUpload,
}: {
	handleImgUpload: (e: React.ChangeEvent<HTMLInputElement>, updateImgUrls: string[]) => void;
}) => {
	return (
		<Flex css={uploadMediaBoxStyle(false)}>
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

export default UploadMedia;
