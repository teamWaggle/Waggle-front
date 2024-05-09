import { useState, useEffect } from "react";

import { Mention, MentionsInput } from "react-mentions";

import { Box, Flex, Text } from "waggle-design-system";

import {
  commentSubmitButtonStyle,
  mentionInputStyle,
  commentBoxStyle,
  mentionImageStyle,
  mentionStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentInput/CommentInput.style";
import { useScheduleMembers } from "@/hooks/api/schedule/useScheduleMembers";

const CommentInput = ({ boardId }: { boardId: number }) => {
  const [comment, setComment] = useState("");

  const handleComment = (comment: string) => {
    setComment(comment);
  };

  const memtionList = useScheduleMembers(boardId);
  useEffect(() => {
    console.log(memtionList);
    console.log(comment);
  }, [comment]);
  return (
    <>
      <Flex styles={{ width: "100%", marginTop: "8px" }} css={commentBoxStyle}>
        <MentionsInput
          singleLine={true}
          style={mentionInputStyle}
          value={comment}
          onChange={(e) => handleComment(e.target.value)}
          suggestionsPortalHost={document.body.querySelector("#mentionPortal") as HTMLElement}
          placeholder="댓글 입력 (@로 멘션 가능합니다)"
        >
          <Mention
            trigger="@"
            style={mentionStyle}
            data={memtionList}
            markup="@[__display__](__id__)"
            appendSpaceOnAdd={true}
            displayTransform={(_id, display) => `@${display}`}
            renderSuggestion={(_suggestion, _search, highlightedDisplay) => (
              <Flex styles={{ align: "center" }}>
                <img
                  css={mentionImageStyle}
                  src="https://source.unsplash.com/random/12x12"
                  alt="img"
                />
                <Text>{highlightedDisplay}</Text>
              </Flex>
            )}
          />
        </MentionsInput>
        <button css={commentSubmitButtonStyle}>등록</button>
      </Flex>
      <Box id="mentionPortal" />
    </>
  );
};

export default CommentInput;
