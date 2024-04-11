import { useState, useRef, useCallback } from "react";

import { useLogInMutation } from "@/hooks/api/auth/useLogInMutation";
import useModal from "@/hooks/useModal";
import { useValidateForm } from "@/hooks/useValidateForm";

import type { UserType } from "@/types/auth";

export const useLoginForm = () => {
  const { mutate: logInMutate } = useLogInMutation();

  const modal = useModal();

  const [loginRequest, setLoginRequest] = useState({ email: "", password: "" });
  const [passwordInputType, setPasswordInputType] = useState("password");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleShowPassword = () => {
    setPasswordInputType(passwordInputType === "password" ? "text" : "password");
  };

  const validateForm = () => {
    if (
      useValidateForm(loginRequest.email, emailRef, "이메일을 입력해주세요.") === false ||
      useValidateForm(loginRequest.password, passwordRef, "비밀번호를 입력해주세요.") === false
    ) {
      return false;
    }

    return true;
  };

  const updateInputValue = useCallback(
    <Key extends keyof UserType>(key: Key, value: UserType[Key]) => {
      setLoginRequest((prevLoginRequest) => {
        const data = {
          ...prevLoginRequest,
          [key]: value,
        };

        return data;
      });
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    logInMutate(loginRequest, {
      onSuccess: ({ result }) => {
        console.log(result);

        modal.closeModal();
      },
    });
  };

  return {
    emailRef,
    passwordRef,
    loginRequest,
    updateInputValue,
    handleSubmit,
    passwordInputType,
    handleShowPassword,
  };
};
