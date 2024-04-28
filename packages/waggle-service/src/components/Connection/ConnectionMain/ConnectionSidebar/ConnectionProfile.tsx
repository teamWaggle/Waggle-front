import { css } from "@emotion/react";

import { Flex, Box, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import { useMemberInfoQuery } from "@/hooks/api/member/useMemberInfoQuery";
import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

const ConnectionProfile = () => {
  const { userUrl } = useMemberInfoSaveQuery();
  const { memberData } = useMemberInfoQuery(userUrl);

  return (
    <Flex styles={{ gap: "17px", align: "center" }} css={profileBoxStyle}>
      <img src={memberData.result.profileImgUrl} alt="profileImg" />

      <Box>
        <Text size="xLarge" css={profileTitleStyle}>
          {memberData.result.nickname}
        </Text>
        <Text size="xSmall" css={getDefaultTextStyle(Theme.color.readonly_text, 500)}>
          참여중인 채팅방 8
        </Text>
      </Box>
    </Flex>
  );
};

export default ConnectionProfile;

const profileBoxStyle = css({
  padding: "20px 28px",
  border: `1px solid ${Theme.color.border}`,
  borderRadius: "20px",
  width: "295px",

  "& > img": {
    width: "78px",
    height: "78px",
    borderRadius: "50%",
  },
});

const profileTitleStyle = css({
  color: Theme.color.text,
  fontWeight: 600,
  marginBottom: "6px",
});
