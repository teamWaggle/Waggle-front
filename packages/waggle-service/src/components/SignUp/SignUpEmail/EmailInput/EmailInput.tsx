import { Flex, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { useEmailAuthSendMutation } from "@/hooks/api/auth/useEmailAuthSendMutation";

import type { EmailAuthVerifyType } from "@/types/auth";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface EmailInputParams {
  email: string;
  updateInputValue: <Key extends keyof EmailAuthVerifyType>(
    key: Key,
    value: EmailAuthVerifyType[Key]
  ) => void;
  emailRef: React.RefObject<HTMLInputElement>;
}

const EmailInput = ({ email, updateInputValue, emailRef }: EmailInputParams) => {
  const { mutate: mutateEmailAuthSend } = useEmailAuthSendMutation();

  return (
    <Flex styles={{ direction: "column", gap: "8px" }}>
      <Text css={getFormTextStyle(true)}>이메일</Text>

      <Flex styles={{ align: "center", gap: "12px", position: "relative" }}>
        <input
          css={getInputStyle("280px")}
          placeholder="Waggle@email.com"
          value={email}
          onChange={(e) => updateInputValue("email", e.target.value)}
          ref={emailRef}
        />

        <Button variant="outline" onClick={() => mutateEmailAuthSend(email)}>
          인증 코드 전송
        </Button>
      </Flex>
    </Flex>
  );
};

export default EmailInput;
