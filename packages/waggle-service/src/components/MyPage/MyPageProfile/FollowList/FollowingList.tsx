import { Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import MemberList from "@/components/common/MemberList/MemberList";

import { useFollowingListQuery } from "@/hooks/api/follow/useFollowingListQuery";
import { useMemberListTrigger } from "@/hooks/common/useMemberListTrigger";

import type { FollowListProps } from "@/components/MyPage/MyPageProfile/FollowList/FollowerList";

import { followListBoxStyle } from "@/components/MyPage/MyPageProfile/FollowList/FollowerList";

const FollowingList = ({ paramUrl, followCount }: FollowListProps) => {
  const { followingListData } = useFollowingListQuery(paramUrl);

  const { isMemberListOpen, handleMemberList, handleMemberListClose, memberListRef } =
    useMemberListTrigger();

  return (
    <Box ref={memberListRef} css={followListBoxStyle} onClick={handleMemberList}>
      <Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
        팔로잉 {followCount}
      </Text>

      {isMemberListOpen && followingListData.result.length !== 0 && (
        <MemberList
          title="팔로잉"
          listData={followingListData.result}
          handleClose={handleMemberListClose}
        />
      )}
    </Box>
  );
};

export default FollowingList;
