import type { FieldValues } from "react-hook-form";
import { Suspense } from "react";
import { css } from "@emotion/react";

import { Flex, Box, Text, Heading, Button, Theme, getDefaultTextStyle } from "waggle-design-system";

import PersonIcon from "@/assets/svg/ic-connection-person.svg?react";
import LockIcon from "@/assets/svg/ic-lock.svg?react";

import ChattingRoomModal from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";
import { Form } from "@/components/common";

import { ROOM_PASSWORD_FORM, ROOM_JOIN_FORM_SCHEMA } from "@/constants/form";

import { useJoinChatRoomMutation } from "@/hooks/api/chat/useJoinChatRoomMutation";
import useModal from "@/hooks/common/useModal";

import { titleInputStyle } from "@/components/Connection/Chat/ChatRoomCreateModal/ChatRoomCreateModal.style";
import {
  titleBoxStyle,
  personBoxStyle,
} from "@/components/Connection/Chat/ChatRoomInfoBox/ChatRoomInfoBox";

interface ChatRoomJoinModalProps {
  chatRoomId: number;
  name: string;
  description: string;
  memberCount: number;
}

const ChatRoomJoinModal = ({
  chatRoomId,
  name,
  description,
  memberCount,
}: ChatRoomJoinModalProps) => {
  const { mutate: joinChatRoomMutate } = useJoinChatRoomMutation();

  const { openModal, closeModal } = useModal();

  const handleSubmit = (data: FieldValues) => {
    joinChatRoomMutate(
      { chatRoomId, password: data["password"] },
      {
        onSuccess: () => {
          closeModal();
          openModal({
            key: "ChattingRoomModal",
            component: () => (
              <Suspense fallback={<div />}>
                <ChattingRoomModal chatRoomId={chatRoomId} />
              </Suspense>
            ),
            isWhiteIcon: true,
          });
        },
      }
    );
  };

  return (
    <Box styles={{ width: "600px" }}>
      <Box css={titleBoxStyle}>
        <Flex styles={{ gap: "16px", align: "center" }}>
          <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>{name}</Heading>
          <Flex styles={{ align: "center", gap: "4px" }} css={personBoxStyle}>
            <PersonIcon />
            <Text size="small" css={getDefaultTextStyle(Theme.color.white, 600)}>
              {memberCount}/7
            </Text>
          </Flex>
        </Flex>
        <Text css={getDefaultTextStyle(Theme.color.white, 500)}>{description}</Text>
      </Box>

      <Form onSubmit={handleSubmit} defaultValues={{ password: "" }} schema={ROOM_JOIN_FORM_SCHEMA}>
        <Flex
          styles={{
            direction: "column",
            align: "center",
            justify: "center",
            gap: "48px",
          }}
          css={contentBoxStyle}
        >
          <Flex styles={{ direction: "column", align: "center", gap: "10px" }}>
            <LockIcon />

            <Form.TextInputField
              inputStyle={titleInputStyle(true)}
              name={ROOM_PASSWORD_FORM.NAME}
              placeholder={ROOM_PASSWORD_FORM.PLACEHOLDER}
              maxLength={ROOM_PASSWORD_FORM.MAX_LENGTH}
            />
          </Flex>

          <Flex styles={{ direction: "column", gap: "12px", align: "center" }}>
            <Button size="large" type="submit">
              입장하기
            </Button>
            <Button size="large" variant="disabled" onClick={() => closeModal()}>
              다른 채팅방 보기
            </Button>
          </Flex>
        </Flex>
      </Form>
    </Box>
  );
};

export default ChatRoomJoinModal;

const contentBoxStyle = css({
  height: "600px",
  backgroundColor: Theme.color.white,
  borderRadius: "0 0 20px 20px",
  width: "100%",
});
