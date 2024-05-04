import { Flex, Box, Divider, Text, Tag, getDefaultTextStyle, Theme } from "waggle-design-system";

import { convertToUTC } from "@/utils/convertToUTC";

import type { MemberCommentListInfoType } from "@/types/comment";

import { infoBoxStyle } from "@/components/MyPage/MyPageCommentCard/MyPageCommentCard.style";

const MyPageCommentCard = ({ commentData }: { commentData: MemberCommentListInfoType }) => {
  return (
    <Box styles={{ width: "100%" }}>
      <Flex
        styles={{ align: "center", justify: "space-between", width: "100%", marginBottom: "6px" }}
      >
        <Flex styles={{ gap: "8px", align: "center" }}>
          <Tag tagText={commentData.sirenCategory} />
          <Tag tagText={commentData.sirenStatus} isResolveTag />
          <Text size="large" css={getDefaultTextStyle(Theme.color.text, 600)}>
            {commentData.sirenTitle}
          </Text>
        </Flex>

        <Flex styles={{ gap: "18px" }} css={infoBoxStyle}>
          <Text size="small">닉네임 영역</Text>
          <Text size="small">{convertToUTC(new Date(commentData.createdDate)).date}</Text>
        </Flex>
      </Flex>

      <Text>{commentData.content}</Text>

      <Divider style={{ marginTop: "12px" }} />
    </Box>
  );
};

export default MyPageCommentCard;
