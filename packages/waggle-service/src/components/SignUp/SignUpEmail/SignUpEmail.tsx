import { Flex, SocialLogin } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";
import Password from "@/components/common/Password/Password";
import EmailAuthCodeInput from "@/components/SignUp/SignUpEmail/EmailAuthCodeInput/EmailAuthCodeInput";
import EmailInput from "@/components/SignUp/SignUpEmail/EmailInput/EmailInput";

import { passwordFormData } from "@/constants/auth";

import { usePasswordForm } from "@/hooks/auth/usePasswordForm";
import { useSignUpEmailForm } from "@/hooks/auth/useSignUpEmailForm";

const SignUpEmail = () => {
  const {
    passwordRef,
    passwordCheckRef,
    passwordRequest,
    updateInputValue: updatePasswordInputValue,
    validateComplete,
    handleChangeValidateComplete,
  } = usePasswordForm({});

  const {
    emailRef,
    emailAuthCodeRef,
    handleChangeEmailAuthComplete,
    signUpEmailRequest,
    updateInputValue,
    handleSignUp,
  } = useSignUpEmailForm({
    password: passwordRequest.password,
    passwordCheck: passwordRequest.passwordCheck,
    validateComplete,
    passwordRef,
    passwordCheckRef,
  });

  return (
    <Flex styles={{ direction: "column", gap: "55px", marginTop: "78px", align: "center" }}>
      <Flex styles={{ direction: "column", gap: "30px" }}>
        {/* 이메일 영역 */}
        <EmailInput
          email={signUpEmailRequest.email}
          updateInputValue={updateInputValue}
          emailRef={emailRef}
        />

        <EmailAuthCodeInput
          email={signUpEmailRequest.email}
          emailAuthCode={signUpEmailRequest.authCode}
          updateInputValue={updateInputValue}
          handleChangeEmailAuthComplete={handleChangeEmailAuthComplete}
          emailAuthCodeRef={emailAuthCodeRef}
        />

        {/* 비밀번호 영역 */}
        {passwordFormData.map((data) => (
          <Password
            data={data}
            passwordRequest={passwordRequest}
            updatePasswordInputValue={updatePasswordInputValue}
            passwordRef={passwordRef}
            passwordCheckRef={passwordCheckRef}
            handleChangeValidateComplete={handleChangeValidateComplete}
          />
        ))}
      </Flex>

      <Button size="xLarge" onClick={handleSignUp}>
        가입하기
      </Button>

      <SocialLogin textSize="small" locate="sign" />
    </Flex>
  );
};

export default SignUpEmail;
