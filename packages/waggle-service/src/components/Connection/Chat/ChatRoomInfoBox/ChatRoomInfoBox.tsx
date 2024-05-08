import { css } from "@emotion/react";
import { useContext } from "react";

import { Flex, Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import PersonIcon from "@/assets/svg/ic-connection-person.svg?react";

import RoomSettingButton from "@/components/Connection/Chat/ChatRoomInfoBox/RoomSettingButton";

import { ChatRoomContext } from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

const ChatRoomInfoBox = ({ isMember }: { isMember?: boolean }) => {
  const context = useContext(ChatRoomContext);

  if (!context) throw Error("context error");

  const { name, description, memberCount } = context;

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
        {isMember && <RoomSettingButton />}
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
