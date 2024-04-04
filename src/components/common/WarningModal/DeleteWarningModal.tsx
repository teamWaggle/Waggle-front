import { useCallback } from "react";

import { Flex, Box, Heading, Text } from "@/components/common";

import { useDeleteCommentMutation } from "@/hooks/api/comment/useDeleteCommentMutation";
import { useDeletePetMutation } from "@/hooks/api/pet/useDeletePetMutation";
import { useDeleteQuestionMutation } from "@/hooks/api/question/useDeleteQuestionMutation";
import { useDeleteRelpyMutation } from "@/hooks/api/reply/useDeleteReplyMutation";
import { useDeleteSirenMutation } from "@/hooks/api/siren/useDeleteSirenMutation";
import { useDeleteStoryMutation } from "@/hooks/api/story/useDeleteStoryMutation";
import useModal from "@/hooks/useModal";

import {
	layoutStyle,
	buttonBoxStyle,
} from "@/components/common/WarningModal/DeleteWarningModal.style";

const DeleteWarningModal = ({ targetId, target }: { targetId: number; target: string }) => {
	const { mutate: deleteCommentMutation } = useDeleteCommentMutation();
	const { mutate: deleteReplyMutation } = useDeleteRelpyMutation();
	const { mutate: deleteStoryMutation } = useDeleteStoryMutation();
	const { mutate: deleteSirenMutation } = useDeleteSirenMutation();
	const { mutate: deleteQuestionMutation } = useDeleteQuestionMutation();
	const { mutate: deletePetMutation } = useDeletePetMutation();

	const mutation =
		target === "comment"
			? deleteCommentMutation
			: target === "reply"
			  ? deleteReplyMutation
			  : target === "story"
			    ? deleteStoryMutation
			    : target === "siren"
			      ? deleteSirenMutation
			      : target === "question"
			        ? deleteQuestionMutation
			        : deletePetMutation;

	const modal = useModal();

	const handleDeleteClick = useCallback(() => {
		mutation(targetId, {
			onSuccess: () => {
				modal.selectCloseModal(`DeleteWarningModal`);

				target === "story" && modal.closeModal();

				target === "siren" && (window.location.href = "/siren");

				target === "question" && (window.location.href = "/question");
			},
		});
	}, []);

	const handleCancelClick = useCallback(() => {
		modal.selectCloseModal(`DeleteWarningModal`);
	}, []);

	return (
		<Flex css={layoutStyle}>
			<Heading size="xSmall" style={{ marginTop: "32px" }}>
				{target === "comment"
					? "댓글"
					: target === "reply"
					  ? "답글"
					  : target === "pet"
					    ? "반려견 정보"
					    : "게시물"}
				을 삭제하시겠어요?
			</Heading>

			<Text size="small" style={{ margin: "6px 0 12px" }}>
				삭제하시면{" "}
				{target === "comment"
					? "댓글"
					: target === "reply"
					  ? "답글"
					  : target === "pet"
					    ? "반려견 정보"
					    : "게시물"}{" "}
				내용은 되돌릴 수 없습니다.
			</Text>

			<Box css={buttonBoxStyle}>
				<button onClick={handleDeleteClick} className="deleteButton">
					삭제
				</button>
				<button onClick={handleCancelClick}>취소</button>
			</Box>
		</Flex>
	);
};

export default DeleteWarningModal;
