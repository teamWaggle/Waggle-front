import { Flex, Box, Divider, Text } from "@/components/common";
import Tag from "@/components/common/Tag/Tag";

import {
  titleBoxStyle,
  titleStyle,
  infoBoxStyle,
} from "@/components/MyPage/MyPageCommentCard/MyPageCommentCard.style";

const MyPageCommentCard = () => {
  return (
    <Box styles={{ width: "100%" }}>
      <Flex css={titleBoxStyle}>
        <Flex css={titleStyle}>
          <Tag tagText="FIND_PET" />
          <Tag tagText="UNRESOLVED" isResolveTag />
          <Text size="large">강아지를 찾고 있어요 도와주세요</Text>
        </Flex>

        <Flex css={infoBoxStyle}>
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
