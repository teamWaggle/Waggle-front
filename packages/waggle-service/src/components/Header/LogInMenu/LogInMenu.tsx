import { useNavigate } from "react-router-dom";

import ProfileIcon from "@/assets/svg/ic-header-profile.svg?react";
import NotiIcon from "@/assets/svg/ic-header-noti.svg?react";

import { Flex } from "@/components/common";
import { Box } from "waggle-design-system";
import Notification from "@/components/common/Notification/Notification";

import { PATH } from "@/constants/path";

import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

import { layoutStyle, notiBoxStyle } from "@/components/Header/LogInMenu/LogInMenu.style";
import { useNotificationTrigger } from "@/hooks/common/useNotificationTrigger";

const LogInMenu = () => {
  const { userUrl } = useMemberInfoSaveQuery();

  const { memberData } = useMemberInfoQuery(userUrl);

  const navigate = useNavigate();

  const { notiRef, isNotiOpen, isFadeIn, handleNotiOpen } = useNotificationTrigger();

  return (
    <div ref={notiRef}>
      <Flex css={layoutStyle}>
        <NotiIcon width={30} height={30} onClick={handleNotiOpen} />
        <ProfileIcon
          width={40}
          height={40}
          onClick={() => navigate(PATH.MY(memberData.result.userUrl))}
        />
      </Flex>

      {isNotiOpen && (
        <Box css={notiBoxStyle(isFadeIn)} style={{ position: "relative", zIndex: 1 }}>
          <Notification />
        </Box>
      )}
    </div>
  );
};

export default LogInMenu;
