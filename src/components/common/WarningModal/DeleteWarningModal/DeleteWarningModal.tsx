import { useCallback } from "react";

import { Flex, Heading, Text } from "@/components/common";

import { useDeleteCommentMutation } from "@/hooks/api/comment/useDeleteCommentMutation";
import { useDeleteRelpyMutation } from "@/hooks/api/reply/useDeleteReplyMutation";
import { useDeleteSirenMutation } from "@/hooks/api/siren/useDeleteSirenMutation";
import { useDeleteStoryMutation } from "@/hooks/api/story/useDeleteStoryMutation";
import useModal from "@/hooks/useModal";

import {
	layoutStyle,
	buttonBoxStyle,
	buttonStyle,
} from "@/components/common/WarningModal/DeleteWarningModal/DeleteWarningModal.style";

const DeleteWarningModal = ({ targetId, target }: { targetId: number; target: string }) => {
	const deleteCommentMutation = useDeleteCommentMutation();
	const deleteReplyMutation = useDeleteRelpyMutation();
	const deleteStoryMutation = useDeleteStoryMutation();
	const deleteSirenMutation = useDeleteSirenMutation();

	const mutation =
		target === "comment"
			? deleteCommentMutation
			: target === "reply"
			  ? deleteReplyMutation
			  : target === "story"
			    ? deleteStoryMutation
			    : deleteSirenMutation;

	const modal = useModal();

	const handleDeleteClick = useCallback(() => {
		mutation.mutate(targetId, {
			onSuccess: () => {
				modal.selectCloseModal(`DeleteWarningModal`);

				target === "story" && modal.closeModal();

				target === "siren" && (window.location.href = "/siren");
			},
		});
	}, []);

	const handleCancelClick = useCallback(() => {
		modal.selectCloseModal(`DeleteWarningModal`);
	}, []);

	return (
		<Flex css={layoutStyle}>
			<Heading size="xSmall" style={{ marginTop: "32px" }}>
				{target === "comment" ? "댓글" : target === "reply" ? "답글" : "게시물"}을 삭제하시겠어요?
			</Heading>
			<Text size="small" style={{ margin: "6px 0 12px" }}>
				삭제하시면 {target === "comment" ? "댓글" : target === "reply" ? "답글" : "게시물"} 내용은
				되돌릴 수 없습니다.
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
