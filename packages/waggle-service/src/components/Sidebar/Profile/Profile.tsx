import { Flex, Text, getDefaultTextStyle, Theme } from "waggle-design-system";

import LogoutIcon from "@/assets/svg/ic-logout.svg?react";

import { useLogoutMutation } from "@/hooks/api/auth/useLogoutMutation";
import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

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
    <Flex styles={{ justify: "center", align: "center", gap: "14px" }} css={layoutStyle}>
      <img src={memberData.result.profileImgUrl} alt="profileImg" />
      <Flex styles={{ direction: "column" }}>
        <Text css={nicknameStyle}>{memberData.result.nickname}</Text>
        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.text, 500)}>
          {memberData.result.name ? memberData.result.name : memberData.result.nickname}님
        </Text>
      </Flex>

      <button css={buttonBoxStyle} onClick={() => mutateLogOut()}>
        <p css={buttonTextStyle}>로그아웃</p>
        <LogoutIcon />
      </button>
    </Flex>
  );
};

export default Profile;
