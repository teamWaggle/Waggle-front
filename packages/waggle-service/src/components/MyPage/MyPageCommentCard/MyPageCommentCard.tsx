import { Flex, Box, Divider, Text, Tag, getDefaultTextStyle, Theme } from "waggle-design-system";

import { convertToUTC } from "@/utils/convertToUTC";

import type { CommentDataType } from "@/types/comment";

import { infoBoxStyle } from "@/components/MyPage/MyPageCommentCard/MyPageCommentCard.style";

const MyPageCommentCard = ({ commentData }: CommentDataType) => {
  return (
    <Box styles={{ width: "100%" }}>
      <Flex
        styles={{ align: "center", justify: "space-between", width: "100%", marginBottom: "6px" }}
      >
        <Flex styles={{ gap: "8px", align: "center" }}>
          <Tag tagText="FIND_PET" />
          <Tag tagText="UNRESOLVED" isResolveTag />
          <Text size="large" css={getDefaultTextStyle(Theme.color.text, 600)}>
            제목 영역
          </Text>
        </Flex>

        <Flex styles={{ gap: "18px" }} css={infoBoxStyle}>
          <Text size="small">{commentData.member.nickname}</Text>
          <Text size="small">{convertToUTC(new Date(commentData.createdDate)).date}</Text>
        </Flex>
      </Flex>

      <Text>{commentData.content}</Text>

      <Divider style={{ marginTop: "12px" }} />
    </Box>
  );
};

export default MyPageCommentCard;
