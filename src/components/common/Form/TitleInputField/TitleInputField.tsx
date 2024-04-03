import type { FieldPath, FieldValues } from "react-hook-form";

import { InputNotice } from "@/components/common";

import { useControlledTextForm } from "@/hooks/useControlledTextForm";

import { titleTextInputStyle } from "@/components/common/Form/TitleInputField/TitleInputField.style";

const TitleInputField = ({
	name,
	validateText,
	placeholder,
}: {
	name: FieldPath<FieldValues>;
	validateText: string;
	placeholder: string;
}) => {
	const { handleOnChange, isValid, errorMessage } = useControlledTextForm(name);
	return (
		<>
			<input
				type="text"
				onChange={handleOnChange}
				css={titleTextInputStyle(false)}
				placeholder={placeholder}
			/>
			<InputNotice isValid={isValid} message={errorMessage || validateText} />
		</>
	);
};

export default TitleInputField;
