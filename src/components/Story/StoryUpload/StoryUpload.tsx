import { useState, useEffect } from "react";

import UploadMediaIcon from "@/assets/svg/ic-media-upload.svg?react";

import { Flex, Text } from "@/components/common";
import StoryContent from "@/components/Story/StoryUpload/StoryContent";

import useModal from "@/hooks/useModal";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { layoutStyle, labelStyle } from "@/components/Story/StoryUpload/StoryUpload.style";

const StoryUpload = () => {
	const [fileURL, setFileURL] = useState<string>("");
	const [fileUpload, setFileUpload] = useState(false);

	const modal = useModal();

	const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.currentTarget;
		const files = (target.files as FileList)[0];

		if (files === undefined) {
			return;
		}

		const newFileURL = URL.createObjectURL(files);
		setFileURL(newFileURL);
		setFileUpload(true);
	};

	useEffect(() => {
		if (fileUpload) {
			modal.closeModal();

			modal.openModal({
				key: `StoryContentModal`,
				component: () => <StoryContent media={fileURL} />,
			});
		}
	}, [fileUpload]);

	return (
		<Flex css={layoutStyle}>
			<UploadMediaIcon />
			<Text size="xLarge" css={getDefaultTextStyle(Theme.color.white, 600)}>
				사진과 동영상을 여기다 끌어다 놓으세요
			</Text>
			<label htmlFor="media" css={labelStyle}>
				<Text size="large" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
					컴퓨터에서 선택
				</Text>
			</label>
			<input type="file" multiple id="media" onChange={handleChangeImg} />
		</Flex>
	);
};

export default StoryUpload;