import PenIcon from "@/assets/svg/pen.svg?react";
import TrashIcon from "@/assets/svg/trashCan.svg?react";

import { Box, Flex, MentionChecker, Text } from "@/components/common";
import { format } from "date-fns";

import {
  commentBoxStyle,
  imgStyle,
  commentUserNameStyle,
  commentTimeStyle,
  commentTextBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/Comment/Comment.style";

const Comment = () => {
  return (
    <Flex css={commentBoxStyle}>
      <Box tag="figure">
        <img css={imgStyle} src="https://source.unsplash.com/random/300x300" alt="" />
      </Box>
      <Flex tag="section" styles={{ width: "100%", direction: "column" }}>
        <Flex tag="article" styles={{ width: "300px", align: "center", justify: "space-between" }}>
          <Flex styles={{ gap: "16px" }}>
            <Text css={commentUserNameStyle}>강아지몽몽</Text>
            <Text size="xSmall" css={commentTimeStyle}>
              {format(new Date(), "yyyy.M.dd")}
            </Text>
          </Flex>
          <Flex styles={{ gap: "8px" }}>
            <PenIcon />
            <TrashIcon />
          </Flex>
        </Flex>
        <Flex css={commentTextBoxStyle}>
          <MentionChecker content="@[아아] 안녕허세요안녕허세요안녕허세요" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Comment;
