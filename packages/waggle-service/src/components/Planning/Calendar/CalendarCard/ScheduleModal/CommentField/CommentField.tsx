import { useRef, createContext, useState } from "react";
import { scheduleCommentBoxStyle } from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentField/CommentField.style";
import CommentInput from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentField/CommentInput/CommentInput";
import { Flex } from "waggle-design-system";
import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";
import useObserver from "@/hooks/common/useObserver";
import Comment from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentField/Comment/Comment";

export const CommentFieldContext = createContext<{
  editCommentValue: string;
  editCommentId: number | null;
  handleCommentEditValue: (value: string) => void;
  handleEditCommentId: (commentId: number | null) => void;
}>({
  editCommentValue: "",
  editCommentId: null,
  handleCommentEditValue: () => {},
  handleEditCommentId: () => {},
});

const CommentField = ({ boardId }: { boardId: number }) => {
  const commentBoxRef = useRef<HTMLDivElement>(null);
  const { commentData, fetchNextPage, hasNextPage, isFetching } = useCommentQuery(boardId);
  const [editCommentValue, setEditComment] = useState<string>("");
  const [editCommentId, setEditCommentId] = useState<number | null>(null);

  const handleCommentEditValue = (value: string) => {
    setEditComment(value);
  };

  const handleEditCommentId = (commentId: number | null) => {
    setEditCommentId(commentId);
  };

  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });
  return (
    <CommentFieldContext.Provider
      value={{ editCommentValue, handleCommentEditValue, editCommentId, handleEditCommentId }}
    >
      <Flex
        styles={{ direction: "column", width: "100%", height: "300px", marginTop: "16px" }}
        css={scheduleCommentBoxStyle}
        tag="section"
        ref={commentBoxRef}
      >
        {commentData?.pages?.map((commentData, page) => (
          <Flex key={page} styles={{ direction: "column", gap: "8px" }}>
            {commentData.result.commentList.map((comment) => (
              <Comment key={comment.commentId} comment={comment} />
            ))}
          </Flex>
        ))}
        <div ref={ref} />
      </Flex>
      <CommentInput boardId={boardId} />
    </CommentFieldContext.Provider>
  );
};

export default CommentField;
