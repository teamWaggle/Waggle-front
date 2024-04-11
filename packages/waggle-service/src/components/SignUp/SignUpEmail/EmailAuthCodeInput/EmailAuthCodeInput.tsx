import { Flex, Text } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { useEmailAuthVerifyMutation } from "@/hooks/api/auth/useEmailAuthVerifyMutation";

import type { EmailAuthVerifyType } from "@/types/auth";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface EmailAuthCodeInputParams {
  email: string;
  emailAuthCode: string;
  updateInputValue: <Key extends keyof EmailAuthVerifyType>(
    key: Key,
    value: EmailAuthVerifyType[Key]
  ) => void;
  handleChangeEmailAuthComplete: (complete: boolean) => void;
  emailAuthCodeRef: React.RefObject<HTMLInputElement>;
}

const EmailAuthCodeInput = ({
  email,
  emailAuthCode,
  updateInputValue,
  handleChangeEmailAuthComplete,
  emailAuthCodeRef,
}: EmailAuthCodeInputParams) => {
  const { mutate: emailAuthVerifyMutation } = useEmailAuthVerifyMutation();

  return (
    <Flex styles={{ direction: "column", gap: "8px" }}>
      <Text css={getFormTextStyle(true)}>이메일 인증번호</Text>
      <Flex styles={{ align: "center", gap: "12px", position: "relative" }}>
        <input
          css={getInputStyle("280px")}
          placeholder="인증번호 8자리 입력"
          value={emailAuthCode}
          onChange={(e) => updateInputValue("authCode", e.target.value)}
          ref={emailAuthCodeRef}
          maxLength={8}
        />

        <Button
          variant="outline"
          onClick={() =>
            emailAuthVerifyMutation(
              { email, authCode: emailAuthCode },
              {
                onSuccess: () => handleChangeEmailAuthComplete(true),
              }
            )
          }
        >
          인증번호 인증
        </Button>
      </Flex>
    </Flex>
  );
};

export default EmailAuthCodeInput;
