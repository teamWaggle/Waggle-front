import type { FieldValues } from "react-hook-form";
import { Suspense } from "react";

import { Flex, Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import { Form } from "@/components/common";
import ChatRoomModal from "@/components/Connection/Chat/ChatRoomModal/ChatRoomModal";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";

import {
  ROOM_TITLE_FORM,
  ROOM_DESCRIPTION_FORM,
  ROOM_PASSWORD_FORM,
  ROOM_FORM_SCHEMA,
} from "@/constants/form";

import { useEditChatRoomMutation } from "@/hooks/api/chat/useEditChatRoomMutation";
import { useDeleteChatRoomMutation } from "@/hooks/api/chat/useDeleteChatRoomMutation";
import useModal from "@/hooks/common/useModal";

import {
  titleBoxStyle,
  contentBoxStyle,
  titleInputStyle,
  buttonBoxStyle,
} from "@/components/Connection/Chat/ChatRoomCreateModal/ChatRoomCreateModal.style";

interface ChatRoomEditModalProps {
  name: string;
  description: string;
  chatRoomId?: number;
  password: string;
}

const ChatRoomEditModal = ({ name, description, chatRoomId, password }: ChatRoomEditModalProps) => {
  const { mutate: editChatRoomMutate } = useEditChatRoomMutation(chatRoomId);
  const { mutate: deleteChatRoomMutate } = useDeleteChatRoomMutation();

  const { openModal, closeModal } = useModal();

  const deleteMutate = () => {
    deleteChatRoomMutate(chatRoomId, {
      onSuccess: () => {
        closeModal();
      },
    });
  };

  const handleDeleteChatRoom = () => {
    openModal({
      key: `DeleteWarningModal`,
      component: () => <DeleteWarningModal targetText="채팅방" handleDelete={deleteMutate} />,
      notCloseIcon: true,
      isUpper: true,
    });
  };

  const handleSubmit = (data: FieldValues) => {
    const chatRoomRequest = {
      name: data["title"],
      description: data["description"],
      password: data["password"],
      chatRoomId,
    };

    editChatRoomMutate(chatRoomRequest, {
      onSuccess: () => {
        closeModal();
        openModal({
          key: "ChatRoomModal",
          component: () => (
            <Suspense fallback={<div />}>
              <ChatRoomModal chatRoomId={chatRoomId} />
            </Suspense>
          ),
          isWhiteIcon: true,
        });
      },
    });
  };

  return (
    <Box styles={{ width: "600px" }}>
      <Box css={titleBoxStyle}>
        <Heading css={getDefaultTextStyle(Theme.color.white, 700)}>채팅방 설정</Heading>
        <Text css={getDefaultTextStyle(Theme.color.white, 500)}>
          채팅방을 자유롭게 설정해보세요!
        </Text>
      </Box>

      <Flex css={contentBoxStyle}>
        <Form
          onSubmit={handleSubmit}
          defaultValues={{ title: name, description, password }}
          schema={ROOM_FORM_SCHEMA}
        >
          <Box styles={{ width: "100%" }}>
            <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
              {ROOM_TITLE_FORM.TITLE}
            </Heading>
            <Form.TextInputField
              inputStyle={titleInputStyle()}
              name={ROOM_TITLE_FORM.NAME}
              placeholder={ROOM_TITLE_FORM.PLACEHOLDER}
            />
          </Box>
          <Box styles={{ width: "100%" }}>
            <Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
              {ROOM_DESCRIPTION_FORM.TITLE}
            </Heading>
            <Form.TextInputField
              inputStyle={titleInputStyle()}
              name={ROOM_DESCRIPTION_FORM.NAME}
              placeholder={ROOM_DESCRIPTION_FORM.PLACEHOLDER}
            />
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
            <button className="deleteButton" onClick={handleDeleteChatRoom}>
              채팅방 삭제하기
            </button>
            <button type="submit">채팅방 설정 저장하기</button>
          </Box>
        </Form>
      </Flex>
    </Box>
  );
};

export default ChatRoomEditModal;
