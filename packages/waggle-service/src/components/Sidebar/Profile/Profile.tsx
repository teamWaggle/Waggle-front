import LogoutIcon from "@/assets/svg/ic-logout.svg?react";

import { Flex, Text } from "@/components/common";

import { useLogoutMutation } from "@/hooks/api/auth/useLogoutMutation";
import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
  layoutStyle,
  nicknameStyle,
  buttonBoxStyle,
  buttonTextStyle,
} from "@/components/Sidebar/Profile/Profile.style";

const Profile = () => {
  const { userUrl } = useMemberInfoSaveQuery();
  const { memberData } = useMemberInfoQuery(userUrl);

  const { mutate: mutateLogOut } = useLogoutMutation();

  return (
    <Flex css={layoutStyle}>
      <img src={memberData.result.profileImgUrl} alt="profileImg" />
      <Flex styles={{ direction: "column" }}>
        <Text css={nicknameStyle}>{memberData.result.nickname}</Text>
        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.text, 500)}>
          {memberData.result.name ? memberData.result.name : memberData.result.nickname}님
        </Text>
      </Flex>

      <Flex tag="button" css={buttonBoxStyle} onClick={() => mutateLogOut()}>
        <Text css={buttonTextStyle}>로그아웃</Text>
        <LogoutIcon />
      </Flex>
    </Flex>
  );
};

export default Profile;
