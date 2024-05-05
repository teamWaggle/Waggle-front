import SampleImg from "@/assets/png/post-sample.png";

import { Flex, Box, Text } from "waggle-design-system";

import CloseIcon from "@/assets/svg/ic-close-modal.svg?react";

import {
  listBoxStyle,
  contentBoxStyle,
  profileImgStyle,
  nicknameStyle,
} from "@/components/Story/StoryComment/Recommend/Recommend.style";

const RecommendList = ({ closeList }: { closeList: () => void }) => {
  return (
    <Box css={listBoxStyle}>
      <CloseIcon width={12} height={12} onClick={closeList} />
      <Text size="xSmall">좋아요</Text>
      <Flex styles={{ direction: "column", gap: "10px", marginTop: "20px" }} css={contentBoxStyle}>
        <Flex styles={{ align: "center", gap: "10px" }}>
          <img src={SampleImg} alt="profileImg" css={profileImgStyle} />
          <Text size="xSmall" css={nicknameStyle}>
            강아지가 좋아요adsfdasfdasfasdfasdfsadfsfsadfsadfsafasfadsfasdfsad
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecommendList;
