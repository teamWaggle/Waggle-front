import { useRecoilValue } from "recoil";

import { Flex, Box, Divider, Heading, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import PasswordEditModal from "@/components/MyPage/MyPageProfile/PasswordEditModal/PasswordEditModal";
import ProfileEditModal from "@/components/MyPage/MyPageProfile/ProfileEditModal/ProfileEditModal";
import MyPageProfileTab from "@/components/MyPage/MyPageProfile/MyPageProfileTab/MyPageProfileTab";

import useModal from "@/hooks/common/useModal";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { MemberDataType } from "@/types/auth";

import {
  layoutStyle,
  profileInfoBoxStyle,
} from "@/components/MyPage/MyPageProfile/MyPageProfile.style";

const MyPageProfile = ({ memberData }: MemberDataType) => {
  const { profileImgUrl, nickname, memberId, followerCount, followingCount } = memberData;

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const userData = isLoggedIn && useMemberInfoSaveQuery();

  const userId = userData ? userData.memberId : null;

  const modal = useModal();

  const follow = true;

  const handleProfileEdit = () => {
    modal.openModal({
      key: "ProfileEditModal",
      component: () => <ProfileEditModal memberData={memberData} />,
    });
  };

  const handlePasswordEdit = () => {
    modal.openModal({
      key: "PasswordEditModal",
      component: () => <PasswordEditModal memberId={memberId} />,
    });
  };

  return (
    <Box css={layoutStyle}>
      <Flex css={profileInfoBoxStyle}>
        <img src={profileImgUrl} alt="profileImg" />

        <Box>
          <Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
            {nickname}
          </Heading>

          <Text size="small" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
            <span>팔로워 {followerCount}</span>
            <span>팔로잉 {followingCount}</span>
          </Text>
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
            variant={follow ? "disabled" : "default"}
          >
            {follow ? "팔로우" : "팔로잉"}
          </Button>
        </Box>
      )}

      <Divider />

      <MyPageProfileTab />
    </Box>
  );
};

export default MyPageProfile;
