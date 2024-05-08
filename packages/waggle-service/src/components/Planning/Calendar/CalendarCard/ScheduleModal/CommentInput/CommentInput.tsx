import { Mention, MentionsInput } from "react-mentions";

import { Box, Flex, Text } from "waggle-design-system";

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

const CommentInput = ({
  value,
  handleOnChange,
}: {
  value: string;
  handleOnChange: (comment: string) => void;
}) => {
  return (
    <>
      <Flex styles={{ width: "100%", marginTop: "8px" }} css={commentBoxStyle}>
        <MentionsInput
          singleLine={true}
          style={mentionInputStyle}
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
          suggestionsPortalHost={document.body.querySelector("#mentionPortal") as HTMLElement}
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
