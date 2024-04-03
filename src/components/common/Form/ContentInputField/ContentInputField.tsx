import type { FieldPath, FieldValues } from "react-hook-form";

import { InputNotice } from "@/components/common";

import { useControlledTextForm } from "@/hooks/useControlledTextForm";

import { contentTextareaStyle } from "@/components/common/Form/ContentInputField/ContentInputField.style";

const ContentInputField = ({
	name,
	placeholder,
	validateText,
}: {
	name: FieldPath<FieldValues>;
	placeholder: string;
	validateText: string;
}) => {
	const { handleOnChange, isValid, errorMessage } = useControlledTextForm(name);

	return (
		<>
			<textarea
				css={contentTextareaStyle(false)}
				placeholder={placeholder}
				onChange={handleOnChange}
			/>
			<InputNotice message={errorMessage || validateText} isValid={isValid} />
		</>
	);
};
export default ContentInputField;
