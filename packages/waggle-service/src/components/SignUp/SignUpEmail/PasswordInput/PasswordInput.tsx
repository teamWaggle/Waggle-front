import { useState } from "react";

import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";
import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";

import { Flex, Text } from "@/components/common";

import type { PasswordFormType } from "@/types/auth";

import { passwordIconStyle } from "@/components/Login/LoginModal/LoginModal.style";
import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

interface PasswordParams {
  password: string;
  valueKey: keyof PasswordFormType;
  updatePasswordInputValue: <Key extends keyof PasswordFormType>(
    key: Key,
    value: PasswordFormType[Key]
  ) => void;
  passwordRef: React.RefObject<HTMLInputElement>;
  title: string;
  isFind?: boolean;
}

const PasswordInput = ({
  password,
  valueKey,
  updatePasswordInputValue,
  passwordRef,
  title,
  isFind,
}: PasswordParams) => {
  const [passwordType, setPasswordType] = useState("password");

  const handleShowPassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <Text css={getFormTextStyle(true)}>{title}</Text>

      <Flex styles={{ align: "center", gap: "30px", position: "relative" }}>
        <input
          css={getInputStyle(isFind ? "330px" : "412px")}
          placeholder="••••••••"
          value={password}
          onChange={(e) => updatePasswordInputValue(valueKey, e.target.value)}
          type={passwordType}
          ref={passwordRef}
          maxLength={20}
        />

        <>
          {passwordType === "text" ? (
            <PasswordShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
          ) : (
            <PasswordNotShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
          )}
        </>
      </Flex>
    </>
  );
};

export default PasswordInput;
