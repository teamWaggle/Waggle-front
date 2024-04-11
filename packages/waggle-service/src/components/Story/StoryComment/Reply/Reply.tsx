import { useState, useRef, useCallback } from "react";
import { flushSync } from "react-dom";

import { Flex, Box, Text, Divider } from "@/components/common";
import CommentInput from "@/components/Story/StoryComment/CommentInput";
import ReplyItem from "@/components/Story/StoryComment/Reply/ReplyItem";

import { useEditReplyMutation } from "@/hooks/api/reply/useEditReplyMutation";
import { usePostReplyMutation } from "@/hooks/api/reply/usePostReplyMutation";
import { useReplyQuery } from "@/hooks/api/reply/useReplyQuery";

import { handleCommentTextStyle } from "@/components/Story/StoryComment/Comment.style";

const Reply = ({
  commentId,
  setReplyOpen,
}: {
  commentId: number;
  setReplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { replyData } = useReplyQuery(0, commentId);

  const { mutate: postReplyMutation } = usePostReplyMutation();
  const { mutate: editReplyMutation } = useEditReplyMutation();

  const [content, setContent] = useState("");
  const [mentionedMemberList] = useState<string[]>(["test"]);
  const [replyButtonText, setReplyButtonText] = useState("등록");
  const [replyId, setReplyId] = useState(0);

  const commentInputRef = useRef<HTMLInputElement>(null);

  const handleAddReply = () => {
    postReplyMutation(
      {
        content,
        mentionedMemberList,
        commentId,
      },
      {
        onSuccess: () => {
          setContent("");
        },
      }
    );
  };

  const handleEditReply = () => {
    editReplyMutation(
      {
        content,
        mentionedMemberList,
        replyId,
      },
      {
        onSuccess: () => {
          setContent("");
          setReplyId(0);
        },
      }
    );
  };

  const handleReplyEditClick = useCallback((content: string, replyId: number) => {
    flushSync(() => {
      setReplyOpen(true);
    });

    if (!commentInputRef.current) return;

    commentInputRef.current.focus();
    setContent(content);
    setReplyId(replyId);
    setReplyButtonText("수정");
  }, []);

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
                handleReplyEditClick={handleReplyEditClick}
              />
            ))}

          <CommentInput
            width="215px"
            placeholder="답글 작성"
            handleButtonClick={replyButtonText === "등록" ? handleAddReply : handleEditReply}
            content={content}
            setContent={setContent}
            commentInputRef={commentInputRef}
            commentButtonText={replyButtonText}
          />
        </Flex>
      ) : (
        <Box styles={{ paddingLeft: "43px" }}>
          <CommentInput
            width="215px"
            placeholder="답글 작성"
            handleButtonClick={handleAddReply}
            content={content}
            setContent={setContent}
            commentInputRef={commentInputRef}
            commentButtonText={replyButtonText}
          />
        </Box>
      )}
    </>
  );
};

export default Reply;
