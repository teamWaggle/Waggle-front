import PenIcon from "@/assets/svg/pen.svg?react";
import TrashIcon from "@/assets/svg/trashCan.svg?react";

import { Box, Flex, MentionChecker, Text } from "waggle-design-system";
import { format } from "date-fns";

import {
  commentBoxStyle,
  imgStyle,
  commentUserNameStyle,
  commentTimeStyle,
  commentTextBoxStyle,
} from "@/components/Planning/Calendar/CalendarCard/ScheduleModal/Comment/Comment.style";
import type { CommentListInfoType } from "@/types/comment";

const Comment = ({ comment }: { comment: CommentListInfoType }) => {
  const { content, createdDate, member } = comment;
  return (
    <Flex styles={{ align: "center", marginBottom: "16px" }} css={commentBoxStyle}>
      <Box tag="figure">
        <img css={imgStyle} src={member.profileImgUrl} alt="profileImg" />
      </Box>
      <Flex tag="section" styles={{ width: "100%", direction: "column" }}>
        <Flex tag="article" styles={{ width: "300px", align: "center", justify: "space-between" }}>
          <Flex styles={{ gap: "16px" }}>
            <Text css={commentUserNameStyle}>{member.nickname}</Text>
            <Text size="xSmall" css={commentTimeStyle}>
              {format(createdDate, "yyyy.M.dd")}
            </Text>
          </Flex>
          <Flex styles={{ gap: "8px" }}>
            <PenIcon />
            <TrashIcon />
          </Flex>
        </Flex>
        <Flex css={commentTextBoxStyle}>
          <MentionChecker content={content} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Comment;
