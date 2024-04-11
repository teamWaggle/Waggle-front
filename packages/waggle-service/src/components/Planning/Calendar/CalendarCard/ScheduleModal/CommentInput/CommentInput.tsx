import { useEffect, useState } from "react";
import { Mention, MentionsInput } from "react-mentions";

import { Flex, Text } from "@/components/common";

import {
  commentSubmitButtonStyle,
  mentionInputStyle,
  commentBoxStyle,
  mentionImageStyle,
  mentionStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/CommentInput/CommentInput.style";

const users = [
  {
    id: "isaac",
    display: "Isaac Newton",
  },
  {
    id: "sam",
    display: "Sam Victor",
  },
  {
    id: "emma",
    display: "emmanuel@nobody.com",
  },
];

const CommentInput = () => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log(comment);
  }, [comment]);
  return (
    <Flex css={commentBoxStyle}>
      <MentionsInput
        singleLine={true}
        style={mentionInputStyle}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글 입력 (@로 멘션 가능합니다)"
      >
        <Mention
          trigger="@"
          style={mentionStyle}
          data={users}
          markup="@[__display__](__id__)"
          appendSpaceOnAdd={true}
          displayTransform={(_id, display) => `@${display}`}
          renderSuggestion={(_suggestion, _search, highlightedDisplay) => (
            <>
              <Flex styles={{ align: "center" }}>
                <img
                  css={mentionImageStyle}
                  src="https://source.unsplash.com/random/12x12"
                  alt="img"
                />
                <Text>{highlightedDisplay}</Text>
              </Flex>
            </>
          )}
        />
      </MentionsInput>
      <button css={commentSubmitButtonStyle}>등록</button>
    </Flex>
  );
};

export default CommentInput;
