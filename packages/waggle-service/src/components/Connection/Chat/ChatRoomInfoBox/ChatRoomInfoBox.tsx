import { css } from "@emotion/react";

import { Flex, Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import PersonIcon from "@/assets/svg/ic-connection-person.svg?react";

import RoomSettingButton from "@/components/Connection/Chat/ChatRoomInfoBox/RoomSettingButton";

interface ChatRoomInfoBoxProps {
  name: string;
  description: string;
  memberCount: number;
  ownerId?: number;
  isMember?: boolean;
  roomId?: number;
}

const ChatRoomInfoBox = ({
  name,
  description,
  memberCount,
  ownerId,
  roomId,
  isMember,
}: ChatRoomInfoBoxProps) => {
  return (
    <Box css={titleBoxStyle}>
      <Flex styles={{ gap: "16px", align: "center" }}>
        <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>{name}</Heading>
        <Flex styles={{ align: "center", gap: "4px" }} css={personBoxStyle}>
          <PersonIcon />
          <Text size="small" css={getDefaultTextStyle(Theme.color.white, 600)}>
            {memberCount}/7
          </Text>
        </Flex>
        {isMember && (
          <RoomSettingButton
            name={name}
            description={description}
            ownerId={ownerId}
            roomId={roomId}
          />
        )}
      </Flex>
      <Text css={getDefaultTextStyle(Theme.color.white, 500)}>{description}</Text>
    </Box>
  );
};

export default ChatRoomInfoBox;

const titleBoxStyle = css({
  backgroundColor: Theme.color.brand_primary,
  padding: "30px 40px",
  borderRadius: "20px 20px 0 0",

  "& > p": {
    marginTop: "14px",
  },
});

const personBoxStyle = css({
  border: `1px solid ${Theme.color.white}`,
  borderRadius: "20px",
  padding: "10px",

  "& > svg > path": {
    fill: Theme.color.white,
  },
});
