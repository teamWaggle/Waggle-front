import type { FieldPath, FieldValues } from "react-hook-form";

import type { SerializedStyles } from "@emotion/react";

import { InputNotice } from "@/components/common";

import { useControlledForm } from "@/hooks/useControlledForm";

const TitleInputField = ({
  name,
  validateText,
  placeholder,
  inputStyle,
  isInitialNotice = true,
}: {
  name: FieldPath<FieldValues>;
  validateText: string;
  placeholder: string;
  inputStyle: SerializedStyles;
  isInitialNotice?: boolean;
}) => {
  const { handleTextOnChange, isValid, errorMessage } = useControlledForm(name);
  const message = isInitialNotice ? validateText : "";

  return (
    <>
      <input css={inputStyle} type="text" onChange={handleTextOnChange} placeholder={placeholder} />
      <InputNotice message={errorMessage || message} isValid={isValid} />
    </>
  );
};

export default TitleInputField;
