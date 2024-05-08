import { useRecoilValue } from "recoil";

import {
  Flex,
  Box,
  Divider,
  Heading,
  Theme,
  Button,
  getDefaultTextStyle,
} from "waggle-design-system";

import PasswordEditModal from "@/components/MyPage/MyPageProfile/PasswordEditModal/PasswordEditModal";
import ProfileEditModal from "@/components/MyPage/MyPageProfile/ProfileEditModal/ProfileEditModal";
import MyPageProfileTab from "@/components/MyPage/MyPageProfile/MyPageProfileTab/MyPageProfileTab";
import FollowerList from "@/components/MyPage/MyPageProfile/FollowList/FollowerList";
import FollowingList from "@/components/MyPage/MyPageProfile/FollowList/FollowingList";

import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { usePostFollow } from "@/hooks/api/follow/usePostFollow";
import { usePostUnfollow } from "@/hooks/api/follow/ustPostUnfollow";
import useModal from "@/hooks/common/useModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";
import { useFollowQuery } from "@/hooks/api/follow/useFollowQuery";

import type { ParamUrlType } from "@/types/common";

import {
  layoutStyle,
  profileInfoBoxStyle,
} from "@/components/MyPage/MyPageProfile/MyPageProfile.style";

const MyPageProfile = ({ paramUrl }: ParamUrlType) => {
  const { mutate: followMutate } = usePostFollow();
  const { mutate: unfollowMutate } = usePostUnfollow();

  const { memberData } = useMemberInfoQuery(paramUrl);
  const { isFollow } = useFollowQuery(paramUrl);

  const { profileImgUrl, nickname, memberId, followerCount, followingCount } = memberData.result;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const userId = userData ? userData.memberId : null;

  const { openModal } = useModal();

  const handleProfileEdit = () => {
    openModal({
      key: "ProfileEditModal",
      component: () => <ProfileEditModal memberData={memberData.result} />,
    });
  };

  const handlePasswordEdit = () => {
    openModal({
      key: "PasswordEditModal",
      component: () => <PasswordEditModal memberId={memberId} />,
    });
  };

  return (
    <Box css={layoutStyle}>
      <Flex styles={{ gap: "20px", align: "center" }} css={profileInfoBoxStyle}>
        <img src={profileImgUrl} alt="profileImg" />

        <Box>
          <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
            {nickname}
          </Heading>

          <Flex styles={{ gap: "30px", marginTop: "8px" }}>
            <FollowerList paramUrl={paramUrl} followCount={followerCount} />
            <FollowingList paramUrl={paramUrl} followCount={followingCount} />
          </Flex>
        </Box>
      </Flex>

      {memberId === userId ? (
        <Flex styles={{ gap: "20px", margin: "24px 0" }}>
          <Button style={{ width: "130px", height: "40px" }} onClick={handleProfileEdit}>
            프로필 수정
          </Button>
          <Button
            style={{ width: "130px", height: "40px" }}
            variant="disabled"
            onClick={handlePasswordEdit}
          >
            비밀번호 변경
          </Button>
        </Flex>
      ) : (
        <Box styles={{ margin: "24px 0" }}>
          <Button
            style={{ width: "294px", height: "40px" }}
            variant={isFollow ? "disabled" : "default"}
            onClick={() => (isFollow ? unfollowMutate(paramUrl) : followMutate(paramUrl))}
          >
            {isFollow ? "팔로잉" : "팔로우"}
          </Button>
        </Box>
      )}

      <Divider />

      <MyPageProfileTab />
    </Box>
  );
};

export default MyPageProfile;
