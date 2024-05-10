import { css } from "@emotion/react";
import { useContext } from "react";

import { Flex, Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import PersonIcon from "@/assets/svg/ic-connection-person.svg?react";

import RoomSettingButton from "@/components/Connection/Chat/ChatRoomInfoBox/RoomSettingButton";
import MemberList from "@/components/common/MemberList/MemberList";

import { ChatRoomContext } from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";

import { useMemberListTrigger } from "@/hooks/common/useMemberListTrigger";

const ChatRoomInfoBox = () => {
  const context = useContext(ChatRoomContext);

  if (!context) throw Error("context error");

  const { name, description, memberCount, memberList } = context;

  const { isMemberListOpen, handleMemberList, handleMemberListClose, memberListRef } =
    useMemberListTrigger();

  console.log(memberList);

  return (
    <Box css={titleBoxStyle}>
      <Flex styles={{ gap: "16px", align: "center" }}>
        <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>{name}</Heading>
        <Flex
          styles={{ align: "center", gap: "4px" }}
          css={personBoxStyle}
          ref={memberListRef}
          onClick={handleMemberList}
        >
          <PersonIcon />
          <Text size="small" css={getDefaultTextStyle(Theme.color.white, 600)}>
            {memberCount}/7
          </Text>

          {isMemberListOpen && (
            <MemberList
              title="채팅방 멤버"
              listData={memberList}
              handleClose={handleMemberListClose}
            />
          )}
        </Flex>

        <RoomSettingButton />
      </Flex>
      <Text css={getDefaultTextStyle(Theme.color.white, 500)}>{description}</Text>
    </Box>
  );
};

export default ChatRoomInfoBox;

export const titleBoxStyle = css({
  backgroundColor: Theme.color.brand_primary,
  padding: "30px 40px",
  borderRadius: "20px 20px 0 0",

  "& > p": {
    marginTop: "14px",
  },
});

export const personBoxStyle = css({
  border: `1px solid ${Theme.color.white}`,
  borderRadius: "20px",
  padding: "10px",

  "& > svg > path": {
    fill: Theme.color.white,
  },
});
