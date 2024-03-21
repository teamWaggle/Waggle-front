import { useCallback } from "react";

import { Flex, Heading, Text } from "@/components/common";
import StoryUpload from "@/components/Story/StoryUpload/StoryUpload";

import useModal from "@/hooks/useModal";

import {
	layoutStyle,
	buttonBoxStyle,
	buttonStyle,
} from "@/components/common/UploadWarningModal/UploadWarningModal.style";

const UploadWarningModal = () => {
	const modal = useModal();

	const handleDeleteClick = useCallback(() => {
		modal.closeModal();

		modal.openModal({
			key: `StoryUpload`,
			component: () => <StoryUpload />,
			isWhiteIcon: true,
		});
	}, []);

	const handleCancelClick = useCallback(() => {
		modal.selectCloseModal(`UploadWarningModal`);
	}, []);

	return (
		<Flex css={layoutStyle}>
			<Heading size="xSmall" style={{ marginTop: "32px" }}>
				게시물을 삭제하시겠어요?
			</Heading>
			<Text size="small" style={{ margin: "6px 0 12px" }}>
				지금 나가면 수정 내용이 저장되지 않습니다.
			</Text>
			<div css={buttonBoxStyle}>
				<button css={buttonStyle(true)} onClick={handleDeleteClick}>
					삭제
				</button>
				<button css={buttonStyle()} onClick={handleCancelClick}>
					취소
				</button>
			</div>
		</Flex>
	);
};

export default UploadWarningModal;
