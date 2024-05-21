import type { FieldValues } from "react-hook-form";

import { Flex, Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Form } from "@/components/common";

import {
  ROOM_FORM_DEFAULT_VALUE,
  ROOM_TITLE_FORM,
  ROOM_DESCRIPTION_FORM,
  ROOM_PASSWORD_FORM,
  ROOM_FORM_SCHEMA,
} from "@/constants/form";

import { usePostChatRoomMutation } from "@/hooks/api/chat/usePostChatRoomMutation";
import useModal from "@/hooks/common/useModal";

import {
  titleBoxStyle,
  contentBoxStyle,
  titleInputStyle,
  buttonBoxStyle,
} from "@/components/Connection/Chat/ChatRoomCreateModal/ChatRoomCreateModal.style";

const ChatRoomCreateModal = () => {
  const { mutate: chatRoomMutate } = usePostChatRoomMutation();

  const { closeModal } = useModal();

  const handleSubmit = (data: FieldValues) => {
    const chatRoomRequest = {
      name: data["title"],
      description: data["description"],
      password: data["password"],
    };

    chatRoomMutate(chatRoomRequest, { onSuccess: () => closeModal() });
  };

  return (
    <Box styles={{ width: "600px" }}>
      <Box css={titleBoxStyle}>
        <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>채팅방 만들기</Heading>
        <Text css={getDefaultTextStyle(Theme.color.white, 500)}>
          내가 원하는 주제에 대해 사람들과 함께 이야기해보세요!
        </Text>
      </Box>

      <Flex css={contentBoxStyle}>
        <Form
          onSubmit={handleSubmit}
          defaultValues={ROOM_FORM_DEFAULT_VALUE}
          schema={ROOM_FORM_SCHEMA}
        >
          <Box styles={{ width: "100%" }}>
            <Flex styles={{ align: "center", gap: "4px" }}>
              <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
                {ROOM_TITLE_FORM.TITLE}
              </Heading>
              <RequiredIcon />
            </Flex>

            <Form.TextInputField
              inputStyle={titleInputStyle()}
              name={ROOM_TITLE_FORM.NAME}
              placeholder={ROOM_TITLE_FORM.PLACEHOLDER}
            />
          </Box>
          <Box styles={{ width: "100%" }}>
            <Flex styles={{ align: "center", gap: "4px" }}>
              <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
                {ROOM_DESCRIPTION_FORM.TITLE}
              </Heading>
              <RequiredIcon />
            </Flex>

            <Form.TextInputField
              inputStyle={titleInputStyle()}
              name={ROOM_DESCRIPTION_FORM.NAME}
              placeholder={ROOM_DESCRIPTION_FORM.PLACEHOLDER}
            />
          </Box>
          <Box styles={{ width: "100%" }}>
            <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
              팀 공개
            </Heading>
            <Flex styles={{ align: "center", gap: "30px" }}>
              <Text>공개</Text>
              <Text>비공개</Text>
            </Flex>
          </Box>
          <Box styles={{ width: "100%" }}>
            <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
              {ROOM_PASSWORD_FORM.TITLE}
            </Heading>
            <Form.TextInputField
              inputStyle={titleInputStyle(true)}
              name={ROOM_PASSWORD_FORM.NAME}
              placeholder={ROOM_PASSWORD_FORM.PLACEHOLDER}
              maxLength={ROOM_PASSWORD_FORM.MAX_LENGTH}
            />
          </Box>

          <Box css={buttonBoxStyle}>
            <button>채팅방 만들기</button>
          </Box>
        </Form>
      </Flex>
    </Box>
  );
};

export default ChatRoomCreateModal;
