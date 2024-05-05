import { Flex, Box, Text } from "waggle-design-system";

import CloseIcon from "@/assets/svg/ic-close-modal.svg?react";

import { PATH } from "@/constants/path";

import { useRecommendListQuery } from "@/hooks/api/recommend/useRecommendListQuery";

import {
  listBoxStyle,
  contentBoxStyle,
  profileImgStyle,
  nicknameStyle,
} from "@/components/Story/StoryComment/Recommend/Recommend.style";

interface RecommendListProps {
  boardId: number;
  handleClose: () => void;
}

const RecommendList = ({ boardId, handleClose }: RecommendListProps) => {
  const { recommendListData } = useRecommendListQuery(boardId);

  return (
    <Box css={listBoxStyle}>
      <CloseIcon width={12} height={12} onClick={handleClose} />
      <Text size="xSmall">좋아요</Text>
      <Flex styles={{ direction: "column", gap: "10px", marginTop: "20px" }} css={contentBoxStyle}>
        {recommendListData.result.memberList.map((memberInfo) => (
          <Flex styles={{ align: "center", gap: "10px" }} key={memberInfo.memberId}>
            <img
              src={memberInfo.profileImgUrl}
              alt="profileImg"
              css={profileImgStyle}
              onClick={() => (window.location.href = `${PATH.MY(memberInfo.userUrl)}?tab=profile`)}
            />
            <Text
              size="xSmall"
              css={nicknameStyle}
              onClick={() => (window.location.href = `${PATH.MY(memberInfo.userUrl)}?tab=profile`)}
            >
              {memberInfo.nickname}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default RecommendList;
