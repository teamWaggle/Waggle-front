import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

import ProfileIcon from "@/assets/svg/ic-header-profile.svg?react";
import NotiIcon from "@/assets/svg/ic-header-noti.svg?react";

import { Flex } from "@/components/common";

import { PATH } from "@/constants/path";

import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import type { handleNotiType } from "@/types/common";

const LogInMenu = ({ handleNotiOpen }: handleNotiType) => {
  const { userUrl } = useMemberInfoSaveQuery();

  const { memberData } = useMemberInfoQuery(userUrl);

  const navigate = useNavigate();

  return (
    <Flex css={layoutStyle}>
      <NotiIcon width={30} height={30} onClick={handleNotiOpen} />
      <ProfileIcon
        width={40}
        height={40}
        onClick={() => navigate(PATH.MY(memberData.result.userUrl))}
      />
    </Flex>
  );
};

export default LogInMenu;

const layoutStyle = css({
  alignItems: "center",
  gap: "10px",

  "& > svg": {
    cursor: "pointer",
  },
});
