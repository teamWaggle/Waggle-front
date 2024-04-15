import { useState, useRef, useCallback } from "react";
import { flushSync } from "react-dom";

import { useEditCommentMutation } from "@/hooks/api/comment/useEditCommentMutation";
import { usePostCommentMutation } from "@/hooks/api/comment/usePostCommentMutation";
import { useEditReplyMutation } from "@/hooks/api/reply/useEditReplyMutation";
import { usePostReplyMutation } from "@/hooks/api/reply/usePostReplyMutation";

interface UseCommentParams {
  boardId?: number;
  targetCommentId?: number;
  handleReplyOpen?: (open: boolean) => void;
}

export const useComment = ({ boardId, targetCommentId, handleReplyOpen }: UseCommentParams) => {
  const { mutate: postCommentMutation } = usePostCommentMutation();
  const { mutate: editCommentMutation } = useEditCommentMutation();
  const { mutate: postReplyMutation } = usePostReplyMutation();
  const { mutate: editReplyMutation } = useEditReplyMutation();

  const [commentContent, setCommentContent] = useState("");
  const [mentionedMemberList] = useState<string[]>(["test"]);
  const [commentButtonText, setCommentButtonText] = useState("등록");
  const [commentId, setCommentId] = useState(0);

  const commentInputRef = useRef<HTMLInputElement>(null);

  const handleCommentContent = useCallback(
    (content: string) => {
      setCommentContent(content);
    },
    [commentContent]
  );

  const handleAddComment = () => {
    postCommentMutation(
      { content: commentContent, mentionedMemberList, boardId },
      {
        onSuccess: () => {
          setCommentContent("");
        },
      }
    );
  };

  const handleEditComment = () => {
    editCommentMutation(
      {
        content: commentContent,
        mentionedMemberList,
        commentId,
      },
      {
        onSuccess: () => {
          setCommentContent("");
          setCommentId(0);
        },
      }
    );
  };

  const handleEditClick = useCallback((content: string, commentId: number) => {
    if (!commentInputRef.current) return;

    commentInputRef.current.focus();
    setCommentContent(content);
    setCommentId(commentId);
    setCommentButtonText("수정");
  }, []);

  const handleAddReply = () => {
    postReplyMutation(
      {
        content: commentContent,
        mentionedMemberList,
        commentId: targetCommentId,
      },
      {
        onSuccess: () => {
          setCommentContent("");
        },
      }
    );
  };

  const handleEditReply = () => {
    editReplyMutation(
      {
        content: commentContent,
        mentionedMemberList,
        replyId: commentId,
      },
      {
        onSuccess: () => {
          setCommentContent("");
          setCommentId(0);
        },
      }
    );
  };

  const handleReplyEditClick = useCallback((content: string, replyId: number) => {
    flushSync(() => {
      handleReplyOpen && handleReplyOpen(true);
    });

    if (!commentInputRef.current) return;

    commentInputRef.current.focus();
    setCommentContent(content);
    setCommentId(replyId);
    setCommentButtonText("수정");
  }, []);

  return {
    commentContent,
    commentButtonText,
    commentInputRef,
    handleAddComment,
    handleEditComment,
    handleEditClick,
    handleCommentContent,
    handleAddReply,
    handleEditReply,
    handleReplyEditClick,
  };
};
