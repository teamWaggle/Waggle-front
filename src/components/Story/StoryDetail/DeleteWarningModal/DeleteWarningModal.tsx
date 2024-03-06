import { useCallback } from "react";

import { Flex, Heading, Text } from "@/components/common";

import { useDeleteCommentMutation } from "@/hooks/api/useDeleteCommentMutation";
import { useDeleteRelpyMutation } from "@/hooks/api/useDeleteReplyMutation";
import useModal from "@/hooks/useModal";

import {
	layoutStyle,
	buttonBoxStyle,
	buttonStyle,
} from "@/components/Story/StoryDetail/DeleteWarningModal/DeleteWarningModal.style";

const DeleteWarningModal = ({ targetId, isReply }: { targetId: number; isReply?: boolean }) => {
	const deleteCommentMutation = useDeleteCommentMutation();
	const deleteReplyMutation = useDeleteRelpyMutation();

	const mutation = isReply ? deleteReplyMutation : deleteCommentMutation;

	const modal = useModal();

	const handleDeleteClick = useCallback(() => {
		mutation.mutate(targetId, {
			onSuccess: () => {
				modal.selectCloseModal(`DeleteWarningModal`);
			},
		});
	}, []);

	const handleCancelClick = useCallback(() => {
		modal.selectCloseModal(`DeleteWarningModal`);
	}, []);

	return (
		<Flex css={layoutStyle}>
			<Heading size="xSmall" style={{ marginTop: "32px" }}>
				{isReply ? "답글" : "댓글"}을 삭제하시겠어요?
			</Heading>
			<Text size="small" style={{ margin: "6px 0 12px" }}>
				삭제하시면 {isReply ? "답글" : "댓글"} 내용은 되돌릴 수 없습니다.
			</Text>
			<div css={buttonBoxStyle}>
				<button css={buttonStyle} onClick={handleDeleteClick} className="deleteButton">
					삭제
				</button>
				<button css={buttonStyle} onClick={handleCancelClick}>
					취소
				</button>
			</div>
		</Flex>
	);
};

export default DeleteWarningModal;
