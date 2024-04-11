import type { FieldPath, FieldValues } from "react-hook-form";

import type { SerializedStyles } from "@emotion/react";

import { InputNotice } from "@/components/common";

import { useControlledForm } from "@/hooks/useControlledForm";

const ContentInputField = ({
  name,
  placeholder,
  validateText,
  inputStyle,
  isInitialNotice = true,
}: {
  name: FieldPath<FieldValues>;
  placeholder: string;
  validateText: string;
  inputStyle: SerializedStyles;
  isInitialNotice?: boolean;
}) => {
  const { handleTextOnChange, isValid, errorMessage } = useControlledForm(name);
  const message = isInitialNotice ? validateText : "";
  return (
    <>
      <textarea css={inputStyle} placeholder={placeholder} onChange={handleTextOnChange} />
      <InputNotice message={errorMessage || message} isValid={isValid} />
    </>
  );
};
export default ContentInputField;
