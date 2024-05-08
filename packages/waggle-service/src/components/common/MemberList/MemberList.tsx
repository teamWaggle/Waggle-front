import { Flex, Box, Text } from "waggle-design-system";

import CloseIcon from "@/assets/svg/ic-close-modal.svg?react";

import { PATH } from "@/constants/path";

import type { MemberType } from "@/types/auth";

import {
  listBoxStyle,
  titleBoxStyle,
  contentBoxStyle,
  profileImgStyle,
  nicknameStyle,
} from "@/components/common/MemberList/MemberList.style";

interface MemberListProps {
  title: string;
  listData: MemberType[];
  handleClose: () => void;
}

const MemberList = ({ title, listData, handleClose }: MemberListProps) => {
  return (
    <Box css={listBoxStyle}>
      <CloseIcon width={10} height={10} onClick={handleClose} />

      <Flex styles={{ justify: "center" }} css={titleBoxStyle}>
        <Text size="xSmall">{title}</Text>
      </Flex>

      <Flex styles={{ direction: "column", gap: "10px", marginTop: "4px" }} css={contentBoxStyle}>
        {listData.map((memberInfo) => (
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

export default MemberList;
