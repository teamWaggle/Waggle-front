import { useCallback, useState, useRef } from "react";

import { useChangePasswordMutation } from "@/hooks/api/auth/usePasswordChangeMutation";
import { useValidateForm } from "@/hooks/useValidateForm";

import type { PasswordFormType } from "@/types/auth";

interface usePasswordFormParams {
  memberId?: number;
  handleChangeMode?: (mode: string) => void;
}

export const usePasswordForm = ({ memberId, handleChangeMode }: usePasswordFormParams) => {
  const { mutate: passwordChangeMutate } = useChangePasswordMutation();

  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const [validateComplete, setValidateComplete] = useState(false);
  const [passwordRequest, setPasswordRequest] = useState({
    password: "",
    passwordCheck: "",
  });

  const handleChangeValidateComplete = (complete: boolean) => {
    setValidateComplete(complete);
  };

  const validateForm = () => {
    if (
      useValidateForm(passwordRequest.password, passwordRef, "비밀번호를 입력해주세요.") ===
        false ||
      useValidateForm(
        passwordRequest.passwordCheck,
        passwordCheckRef,
        "비밀번호 확인을 입력해주세요."
      ) === false ||
      useValidateForm(
        passwordRequest.password === passwordRequest.passwordCheck,
        passwordCheckRef,
        "비밀번호가 일치하지 않습니다. 다시 입력해주세요."
      ) === false ||
      useValidateForm(
        validateComplete,
        passwordRef,
        "비밀번호가 양식이 일치하지 않습니다. 다시 입력해주세요."
      ) === false
    ) {
      return false;
    }

    return true;
  };

  const updateInputValue = useCallback(
    <Key extends keyof PasswordFormType>(key: Key, value: PasswordFormType[Key]) => {
      setPasswordRequest((prevPasswordRequest) => {
        const data = {
          ...prevPasswordRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handlePasswordChange = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    passwordChangeMutate(
      { memberId, password: passwordRequest.password },
      {
        onSuccess: () => {
          handleChangeMode && handleChangeMode("complete");
        },
      }
    );
  };

  return {
    passwordRef,
    passwordCheckRef,
    passwordRequest,
    updateInputValue,
    validateComplete,
    handleChangeValidateComplete,
    handlePasswordChange,
  };
};
