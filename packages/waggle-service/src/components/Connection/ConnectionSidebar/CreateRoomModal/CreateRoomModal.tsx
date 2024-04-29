import { Flex, Box, Heading, Text, Theme, getDefaultTextStyle } from "waggle-design-system";

import { Form } from "@/components/common";

import {
  ROOM_FORM_DEFAULT_VALUE,
  ROOM_TITLE_FORM,
  ROOM_DESCRIPTION_FORM,
  ROOM_PASSWORD_FORM,
  ROOM_FORM_SCHEMA,
} from "@/constants/form";

import {
  titleBoxStyle,
  contentBoxStyle,
  titleInputStyle,
  buttonBoxStyle,
} from "@/components/Connection/ConnectionSidebar/CreateRoomModal/CreateRoomModal.style";

const CreateRoomModal = () => {
  const handleSubmit = () => {};

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
            <button>채팅방 만들기</button>
          </Box>
        </Form>
      </Flex>
    </Box>
  );
};

export default CreateRoomModal;
