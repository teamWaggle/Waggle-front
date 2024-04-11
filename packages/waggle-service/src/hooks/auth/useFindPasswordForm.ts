import { useCallback, useState, useRef } from "react";

import { useEmailAuthSendMutation } from "@/hooks/api/auth/useEmailAuthSendMutation";
import { usePasswordAuthVerifyMutation } from "@/hooks/api/auth/usePasswordAuthVerifyMutation";
import { useValidateForm } from "@/hooks/useValidateForm";

import type { EmailAuthVerifyType } from "@/types/auth";
import type { CommonResponseType } from "@/types/common";

export const useFindPasswordForm = () => {
  const { mutate: emailAuthSendMutate } = useEmailAuthSendMutation();
  const { mutate: passwordEmailAuthMutate } = usePasswordAuthVerifyMutation();

  const emailRef = useRef<HTMLInputElement>(null);
  const emailAuthRef = useRef<HTMLInputElement>(null);

  const [memberId, setMemberId] = useState<number>(0);
  const [mode, setMode] = useState("sendCode");

  const [findPasswordRequest, setFindPasswordRequest] = useState({
    email: "",
    authCode: "",
  });

  const handleChangeMemberId = (memberId: number) => {
    setMemberId(memberId);
  };

  const handleChangeMode = (mode: string) => {
    setMode(mode);
  };

  const updateInputValue = useCallback(
    <Key extends keyof EmailAuthVerifyType>(key: Key, value: EmailAuthVerifyType[Key]) => {
      setFindPasswordRequest((prevFindPasswordRequest) => {
        const data = {
          ...prevFindPasswordRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleEmailSend = () => {
    if (useValidateForm(findPasswordRequest.email, emailRef, "이메일을 입력해주세요.") === false) {
      return false;
    }

    emailAuthSendMutate(findPasswordRequest.email, {
      onSuccess: () => {
        handleChangeMode("authCode");
      },
    });
  };

  const handleEmailAuth = () => {
    if (
      useValidateForm(findPasswordRequest.authCode, emailAuthRef, "인증번호를 입력해주세요.") ===
      false
    ) {
      return false;
    }

    passwordEmailAuthMutate(
      {
        email: findPasswordRequest.email,
        authCode: findPasswordRequest.authCode,
      },
      {
        onSuccess: ({ result }: CommonResponseType) => {
          handleChangeMode("changePassword");
          handleChangeMemberId(result);
        },
      }
    );
  };

  return {
    memberId,
    mode,
    emailRef,
    emailAuthRef,
    findPasswordRequest,
    updateInputValue,
    handleEmailSend,
    handleEmailAuth,
    handleChangeMode,
  };
};
