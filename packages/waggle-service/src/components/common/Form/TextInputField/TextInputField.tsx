import type { FieldPath, FieldValues } from "react-hook-form";

import type { SerializedStyles } from "@emotion/react";

import { InputNotice } from "@/components/common";

import { useControlledForm } from "@/hooks/common/useControlledForm";
import { Flex } from "waggle-design-system";

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
  const { handleTextOnChange, isValid, errorMessage, field } = useControlledForm(name);

  const message = isInitialNotice ? validateText : "";

  return (
    <Flex styles={{ direction: "column", width: "100%", shrink: "1" }}>
      {isContent ? (
        <textarea
          value={field.value}
          css={inputStyle}
          placeholder={placeholder}
          onChange={handleTextOnChange}
        />
      ) : (
        <input
          css={inputStyle}
          type="text"
          onChange={handleTextOnChange}
          placeholder={placeholder}
          maxLength={maxLength}
          value={field.value}
        />
      )}

      <InputNotice message={errorMessage || message} isValid={isValid} />
    </Flex>
  );
};

export default TextInputField;
