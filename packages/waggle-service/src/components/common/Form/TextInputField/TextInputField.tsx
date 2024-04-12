import type { FieldPath, FieldValues } from "react-hook-form";

import type { SerializedStyles } from "@emotion/react";

import { InputNotice } from "@/components/common";

import { useControlledForm } from "@/hooks/useControlledForm";

interface TextInputFieldProps {
  name: FieldPath<FieldValues>;
  validateText?: string;
  placeholder: string;
  inputStyle: SerializedStyles;
  isInitialNotice?: boolean;
  maxLength?: number;
  isContent?: boolean;
}

const TextInputField = ({
  name,
  validateText,
  placeholder,
  inputStyle,
  isInitialNotice = true,
  maxLength,
  isContent,
}: TextInputFieldProps) => {
  const { handleTextOnChange, isValid, errorMessage } = useControlledForm(name);

  const message = isInitialNotice ? validateText : "";

  return (
    <>
      {isContent ? (
        <textarea css={inputStyle} placeholder={placeholder} onChange={handleTextOnChange} />
      ) : (
        <input
          css={inputStyle}
          type="text"
          onChange={handleTextOnChange}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      )}

      <InputNotice message={errorMessage || message} isValid={isValid} />
    </>
  );
};

export default TextInputField;
