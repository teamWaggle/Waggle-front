import { useState, useRef, useCallback } from "react";

import { useEditCommentMutation } from "@/hooks/api/comment/useEditCommentMutation";
import { usePostCommentMutation } from "@/hooks/api/comment/usePostCommentMutation";
import { useEditReplyMutation } from "@/hooks/api/reply/useEditReplyMutation";
import { usePostReplyMutation } from "@/hooks/api/reply/usePostReplyMutation";

interface UseCommentParams {
  boardId?: number;
  isTextArea?: boolean;
  targetCommentId?: number;
}

export const useComment = ({ boardId, isTextArea, targetCommentId }: UseCommentParams) => {
  const { mutate: postCommentMutation } = usePostCommentMutation();
  const { mutate: editCommentMutation } = useEditCommentMutation();
  const { mutate: postReplyMutation } = usePostReplyMutation();
  const { mutate: editReplyMutation } = useEditReplyMutation();

  const [commentContent, setCommentContent] = useState("");
  const [mentionedMemberList] = useState<string[]>(["test"]);
  const [commentButtonText, setCommentButtonText] = useState("등록");
  const [commentId, setCommentId] = useState(0);

  const commentInputRef = useRef<HTMLInputElement>(null);
  const commentTextAreaRef = useRef<HTMLTextAreaElement>(null);

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
    if (isTextArea) {
      if (!commentTextAreaRef.current) return;

      commentTextAreaRef.current.focus();
    } else {
      if (!commentInputRef.current) return;

      commentInputRef.current.focus();
    }

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

  return {
    commentContent,
    commentButtonText,
    commentInputRef,
    commentTextAreaRef,
    handleAddComment,
    handleEditComment,
    handleEditClick,
    handleCommentContent,
    handleAddReply,
    handleEditReply,
  };
};
