import type { FieldValues } from "react-hook-form";

import { Modal } from "waggle-design-system";

import { Flex, Box, Text, Logo, Form, SocialLogin } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import {
  LOGIN_EMAIL_FORM,
  LOGIN_PASSWORD_FORM,
  LOGIN_FORM_DEFAULT_VALUE,
  LOGIN_FORM_SCHEMA,
} from "@/constants/auth";

import { useLogInMutation } from "@/hooks/api/auth/useLogInMutation";

import type { ModalProps } from "@/types/modal";

import {
  layoutStyle,
  inputStyle,
  findTextStyle,
} from "@/components/Login/LoginModal/LoginModal.style";

interface LoginModalProps extends ModalProps {
  openFindEmailModal: () => void;
  openFindPasswordModal: () => void;
}

const LoginModal = ({
  isOpen,
  onClose,
  openFindEmailModal,
  openFindPasswordModal,
}: LoginModalProps) => {
  const { mutate: logInMutate } = useLogInMutation();

  const onSubmit = (data: FieldValues) => {
    const loginRequest = { email: data["email"], password: data["password"] };

    logInMutate(loginRequest, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <Flex css={layoutStyle}>
        <Logo width={138} height={30} />
        <Box styles={{ margin: "24px" }}>
          <Form
            onSubmit={onSubmit}
            defaultValues={LOGIN_FORM_DEFAULT_VALUE}
            schema={LOGIN_FORM_SCHEMA}
          >
            <Form.TextInputField
              inputStyle={inputStyle}
              placeholder={LOGIN_EMAIL_FORM.PLACEHOLDER}
              name={LOGIN_EMAIL_FORM.NAME}
              isInitialNotice={false}
            />

            <Form.PasswordInputField
              inputStyle={inputStyle}
              placeholder={LOGIN_PASSWORD_FORM.PLACEHOLDER}
              name={LOGIN_PASSWORD_FORM.NAME}
              isInitialNotice={false}
              maxLength={LOGIN_PASSWORD_FORM.MAX_LENGTH}
            />

            <Button type="submit" size="medium" style={{ marginTop: "14px" }}>
              로그인
            </Button>
          </Form>
        </Box>

        <Flex styles={{ gap: "24px" }}>
          <Text
            size="xSmall"
            css={findTextStyle}
            onClick={() => {
              onClose();
              openFindEmailModal();
            }}
          >
            아이디(이메일) 찾기
          </Text>
          <Text
            size="xSmall"
            css={findTextStyle}
            onClick={() => {
              onClose();
              openFindPasswordModal();
            }}
          >
            비밀번호 찾기
          </Text>
          <Text
            size="xSmall"
            css={findTextStyle}
            onClick={() => (window.location.href = "/signup?tab=email")}
          >
            회원가입
          </Text>
        </Flex>

        <SocialLogin textSize="xSmall" locate="login" />
      </Flex>
    </Modal>
  );
};

export default LoginModal;
