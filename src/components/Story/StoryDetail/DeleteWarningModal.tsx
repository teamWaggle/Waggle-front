import { useCallback } from "react";

import { Flex, Heading, Text } from "@/components/common";

import { useDeleteCommentMutation } from "@/hooks/api/useDeleteCommentMutation";
import useModal from "@/hooks/useModal";

import {
	layoutStyle,
	buttonBoxStyle,
	buttonStyle,
} from "@/components/Story/StoryDetail/DeleteWarningModal.style";

const DeleteWarningModal = ({ commentId }: { commentId: number }) => {
	const deleteCommentMutation = useDeleteCommentMutation();

	const modal = useModal();

	const handleDeleteClick = useCallback(() => {
		deleteCommentMutation.mutate(commentId, {
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
				댓글을 삭제하시겠어요?
			</Heading>
			<Text size="small" style={{ margin: "6px 0 12px" }}>
				삭제하시면 댓글 내용은 되돌릴 수 없습니다.
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

export default DeleteWarningModal;
