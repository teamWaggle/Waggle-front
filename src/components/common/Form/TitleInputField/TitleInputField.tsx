import type { FieldPath, FieldValues } from "react-hook-form";

import type { SerializedStyles } from "@emotion/react";

import { InputNotice } from "@/components/common";

import { useControlledTextForm } from "@/hooks/useControlledTextForm";

const TitleInputField = ({
	name,
	validateText,
	placeholder,
	inputStyle,
}: {
	name: FieldPath<FieldValues>;
	validateText: string;
	placeholder: string;
	inputStyle: SerializedStyles;
}) => {
	const { handleOnChange, isValid, errorMessage } = useControlledTextForm(name);
	return (
		<>
			<input css={inputStyle} type="text" onChange={handleOnChange} placeholder={placeholder} />
			<InputNotice isValid={isValid} message={errorMessage || validateText} />
		</>
	);
};

export default TitleInputField;
