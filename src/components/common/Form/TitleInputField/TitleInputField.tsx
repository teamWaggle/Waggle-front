import type { FieldPath, FieldValues } from "react-hook-form";
import { useFormState } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

import { InputNotice } from "@/components/common";

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
	const { control, trigger } = useFormContext();
	const { field: textField } = useController({
		control,
		name,
	});
	const { errors } = useFormState({ control, name });
	const isValid = !errors[name];
	return (
		<>
			<input
				type="text"
				onChange={(e) => {
					textField.onChange({ target: { value: e.target.value } });
					trigger(name);
				}}
				css={titleTextInputStyle(false)}
				placeholder={placeholder}
			/>
			<InputNotice isValid={isValid} message={(errors[name]?.message as string) || validateText} />
		</>
	);
};

export default TitleInputField;
