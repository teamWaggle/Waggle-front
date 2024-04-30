import { Flex, Box, Divider, Text, Tag, getDefaultTextStyle, Theme } from "waggle-design-system";

import { infoBoxStyle } from "@/components/MyPage/MyPageCommentCard/MyPageCommentCard.style";

const MyPageCommentCard = () => {
  return (
    <Box styles={{ width: "100%" }}>
      <Flex
        styles={{ align: "center", justify: "space-between", width: "100%", marginBottom: "6px" }}
      >
        <Flex styles={{ gap: "8px", align: "center" }}>
          <Tag tagText="FIND_PET" />
          <Tag tagText="UNRESOLVED" isResolveTag />
          <Text size="large" css={getDefaultTextStyle(Theme.color.text, 600)}>
            강아지를 찾고 있어요 도와주세요
          </Text>
        </Flex>

        <Flex styles={{ gap: "18px" }} css={infoBoxStyle}>
          <Text size="small">멍댕멍댕</Text>
          <Text size="small">조회 129</Text>
          <Text size="small">23.12.27</Text>
        </Flex>
      </Flex>

      <Text>거기 근처에서 흰 색 강아지 본 적 있는데 꼭 찾으셨으면 좋겠네요</Text>

      <Divider style={{ marginTop: "12px" }} />
    </Box>
  );
};

export default MyPageCommentCard;
