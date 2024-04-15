import { useState, useRef, useCallback } from "react";

import { useEditCommentMutation } from "@/hooks/api/comment/useEditCommentMutation";
import { usePostCommentMutation } from "@/hooks/api/comment/usePostCommentMutation";

interface UseCommentParams {
  boardId: number;
}

export const useComment = ({ boardId }: UseCommentParams) => {
  const { mutate: postCommentMutation } = usePostCommentMutation();
  const { mutate: editCommentMutation } = useEditCommentMutation();

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

  return {
    commentContent,
    commentButtonText,
    commentInputRef,
    handleAddComment,
    handleEditComment,
    handleEditClick,
    handleCommentContent,
  };
};
