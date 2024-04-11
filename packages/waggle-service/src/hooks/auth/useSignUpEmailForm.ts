import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useCheckEmailMutation } from "@/hooks/api/auth/useCheckEmailMutation";
import { useLogInMutation } from "@/hooks/api/auth/useLogInMutation";
import { useSignUpMutation } from "@/hooks/api/auth/useSignUpMutation";
import { useValidateForm } from "@/hooks/useValidateForm";

import type { EmailAuthVerifyType } from "@/types/auth";

interface UseSignUpEmailFormParams {
  password: string;
  passwordCheck: string;
  validateComplete: boolean;
  passwordRef: React.RefObject<HTMLInputElement>;
  passwordCheckRef: React.RefObject<HTMLInputElement>;
}

export const useSignUpEmailForm = ({
  password,
  passwordCheck,
  validateComplete,
  passwordRef,
  passwordCheckRef,
}: UseSignUpEmailFormParams) => {
  const { mutate: logInMutate } = useLogInMutation();
  const { mutate: signUpMutate } = useSignUpMutation();
  const { mutate: checkEmailMutate } = useCheckEmailMutation();

  const emailRef = useRef<HTMLInputElement>(null);
  const emailAuthCodeRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [emailAuthComplete, setEmailAuthComplete] = useState(false);

  const [signUpEmailRequest, setSignUpEmailRequest] = useState({
    email: "",
    authCode: "",
  });

  const handleChangeEmailAuthComplete = (complete: boolean) => {
    setEmailAuthComplete(complete);
  };

  const validateForm = () => {
    if (
      useValidateForm(signUpEmailRequest.email, emailRef, "이메일을 입력해주세요") === false ||
      useValidateForm(
        signUpEmailRequest.authCode,
        emailAuthCodeRef,
        "이메일 인증 번호를 입력해주세요."
      ) === false ||
      useValidateForm(
        emailAuthComplete,
        emailAuthCodeRef,
        "이메일 인증 번호가 일치하지 않습니다. 다시 입력해주세요."
      ) === false ||
      useValidateForm(password, passwordRef, "비밀번호를 입력해주세요.") === false ||
      useValidateForm(passwordCheck, passwordCheckRef, "비밀번호 확인을 입력해주세요.") === false ||
      useValidateForm(
        validateComplete,
        passwordRef,
        "비밀번호가 양식이 일치하지 않습니다. 다시 입력해주세요."
      ) === false ||
      useValidateForm(
        password === passwordCheck,
        passwordCheckRef,
        "비밀번호가 일치하지 않습니다. 다시 입력해주세요."
      ) === false
    ) {
      return false;
    }

    return true;
  };

  const updateInputValue = useCallback(
    <Key extends keyof EmailAuthVerifyType>(key: Key, value: EmailAuthVerifyType[Key]) => {
      setSignUpEmailRequest((prevSignUpEmailRequest) => {
        const data = {
          ...prevSignUpEmailRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    checkEmailMutate(signUpEmailRequest.email, {
      onSuccess: () => {
        signUpMutate(
          { email: signUpEmailRequest.email, password },
          {
            onSuccess: () => {
              logInMutate({ email: signUpEmailRequest.email, password });
              navigate(`/signup?${TAB_KEY}=${SIGN_UP_TAB_KEY.PROFILE}`);
            },
          }
        );
      },
      onError: () => {
        toast.error("중복된 이메일입니다");
      },
    });
  };

  return {
    emailRef,
    emailAuthCodeRef,
    handleChangeEmailAuthComplete,
    signUpEmailRequest,
    updateInputValue,
    handleSignUp,
  };
};
