import type { FieldPath, FieldValues } from "react-hook-form";

import type { SerializedStyles } from "@emotion/react";

import { InputNotice } from "@/components/common";

import { useControlledTextForm } from "@/hooks/useControlledTextForm";

const ContentInputField = ({
	name,
	placeholder,
	validateText,
	inputStyle,
}: {
	name: FieldPath<FieldValues>;
	placeholder: string;
	validateText: string;
	inputStyle: SerializedStyles;
}) => {
	const { handleOnChange, isValid, errorMessage } = useControlledTextForm(name);

	return (
		<>
			<textarea css={inputStyle} placeholder={placeholder} onChange={handleOnChange} />
			<InputNotice message={errorMessage || validateText} isValid={isValid} />
		</>
	);
};
export default ContentInputField;
