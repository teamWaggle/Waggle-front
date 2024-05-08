import { css } from "@emotion/react";

import { Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import MemberList from "@/components/common/MemberList/MemberList";

import { useFollowerListQuery } from "@/hooks/api/follow/useFollowerListQuery";
import { useMemberListTrigger } from "@/hooks/common/useMemberListTrigger";

export interface FollowListProps {
  paramUrl?: string;
  followCount: number;
}

const FollowerList = ({ paramUrl, followCount }: FollowListProps) => {
  const { followerListData } = useFollowerListQuery(paramUrl);

  const { isMemberListOpen, handleMemberList, handleMemberListClose, memberListRef } =
    useMemberListTrigger();

  return (
    <Box ref={memberListRef} css={followListBoxStyle} onClick={handleMemberList}>
      <Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
        팔로워 {followCount}
      </Text>

      {isMemberListOpen && followerListData.result.length !== 0 && (
        <MemberList
          title="팔로워"
          listData={followerListData.result}
          handleClose={handleMemberListClose}
        />
      )}
    </Box>
  );
};

export default FollowerList;

export const followListBoxStyle = css({
  position: "relative",
  cursor: "pointer",

  "& > p:hover": {
    opacity: "0.4",
  },
});
