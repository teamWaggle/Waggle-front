import { css } from "@emotion/react";

import { Flex, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import RootSettingIcon from "@/assets/svg/ic-room-setting.svg?react";
import RoomOutIcon from "@/assets/svg/ic-room-out.svg?react";

import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";

const RoomSettingButton = ({ ownerId }: { ownerId?: number }) => {
  const { memberId } = useMemberInfoSaveQuery();

  return (
    <Flex styles={{ align: "center", gap: "4px" }} css={buttonBoxStyle}>
      {memberId === ownerId ? <RootSettingIcon /> : <RoomOutIcon />}
      <Text size="small" css={getDefaultTextStyle(Theme.color.brand_primary, 600)}>
        {memberId === ownerId ? "채팅방 설정" : "채팅방 나가기"}
      </Text>
    </Flex>
  );
};

export default RoomSettingButton;

const buttonBoxStyle = css({
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: Theme.color.white,
  cursor: "pointer",
});
