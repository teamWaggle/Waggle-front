import { useState, useRef } from "react";

import { Flex, Box, Text, Divider } from "@/components/common";
import CommentInput from "@/components/Story/StoryDetail/Comment/CommentInput";
import ReplyItem from "@/components/Story/StoryDetail/Comment/Reply/ReplyItem";

import { usePostReplyMutation } from "@/hooks/api/usePostReplyMutation";
import { useReplyQuery } from "@/hooks/api/useReplyQuery";

import { handleCommentTextStyle } from "@/components/Story/StoryDetail/Comment/Comment.style";

const Reply = ({
	commentId,
	setReplyOpen,
}: {
	commentId: number;
	setReplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { replyData } = useReplyQuery(0, commentId);

	const postReplyMutation = usePostReplyMutation();

	const [content, setContent] = useState("");
	const [mentionedMemberList] = useState<string[]>(["test"]);

	const commentInputRef = useRef<HTMLInputElement>(null);

	const handleAddReply = () => {
		postReplyMutation.mutate(
			{
				content,
				mentionedMemberList,
				commentId,
			},
			{
				onSuccess: () => {
					setContent("");
				},
			},
		);
	};

	return (
		<>
			{replyData?.result.replyList.length !== 0 ? (
				<Flex styles={{ direction: "column", gap: "6px", paddingLeft: "43px" }}>
					<Flex styles={{ align: "center", gap: "6px" }}>
						<Divider length="12px" />
						<Text size="xSmall" css={handleCommentTextStyle} onClick={() => setReplyOpen(false)}>
							답글 접기
						</Text>
					</Flex>

					{replyData &&
						replyData.result.replyList.map((reply) => (
							<ReplyItem
								key={reply.replyId}
								replyId={reply.replyId}
								content={reply.content}
								member={reply.member}
								createdDate={reply.createdDate}
								handleReplyEditClick={() => {}}
							/>
						))}

					<CommentInput
						width="215px"
						placeholder="답글 작성"
						handleAddButton={handleAddReply}
						content={content}
						setContent={setContent}
						commentInputRef={commentInputRef}
					/>
				</Flex>
			) : (
				<Box styles={{ paddingLeft: "43px" }}>
					<CommentInput
						width="215px"
						placeholder="답글 작성"
						handleAddButton={handleAddReply}
						content={content}
						setContent={setContent}
						commentInputRef={commentInputRef}
					/>
				</Box>
			)}
		</>
	);
};

export default Reply;
