import type { FieldPath, FieldValues } from "react-hook-form";
import { useState } from "react";

import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";

import PasswordShowIcon from "@/assets/svg/PasswordShowIcon.svg?react";
import PasswordNotShowIcon from "@/assets/svg/PasswordNotShowIcon.svg?react";

import { InputNotice } from "@/components/common";

import { useControlledForm } from "@/hooks/useControlledForm";

interface PasswordInputFieldProps {
  name: FieldPath<FieldValues>;
  validateText?: string;
  placeholder: string;
  inputStyle: SerializedStyles;
  isInitialNotice?: boolean;
  maxLength?: number;
}

const PasswordInputField = ({
  name,
  validateText,
  placeholder,
  inputStyle,
  isInitialNotice = true,
  maxLength,
}: PasswordInputFieldProps) => {
  const { handleTextOnChange, isValid, errorMessage } = useControlledForm(name);

  const [passwordInputType, setPasswordInputType] = useState("password");

  const message = isInitialNotice ? validateText : "";

  const handleShowPassword = () => {
    setPasswordInputType(passwordInputType === "password" ? "text" : "password");
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        css={inputStyle}
        type={passwordInputType}
        onChange={handleTextOnChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />

      {passwordInputType === "text" ? (
        <PasswordShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
      ) : (
        <PasswordNotShowIcon css={passwordIconStyle} onClick={handleShowPassword} />
      )}

      <InputNotice message={errorMessage || message} isValid={isValid} />
    </div>
  );
};

export default PasswordInputField;

export const passwordIconStyle = css({
  position: "absolute",
  top: "27px",
  right: "18px",
  cursor: "pointer",
});
