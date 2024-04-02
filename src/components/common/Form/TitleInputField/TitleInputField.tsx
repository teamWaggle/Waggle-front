import type { FieldValues, RegisterOptions } from "react-hook-form";
import { useFormState } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

import { InputNotice } from "@/components/common";

import { titleTextInputStyle } from "@/components/common/Form/TitleInputField/TitleInputField.style";

const TitleInputField = ({
	name,
	validateText,
	placeholder,
	rules,
}: {
	name: keyof FieldValues;
	validateText: string;
	placeholder: string;
	rules: Pick<
		RegisterOptions<FieldValues>,
		"maxLength" | "minLength" | "validate" | "required" | "pattern"
	>;
}) => {
	const { control, trigger } = useFormContext();
	const { field: textField } = useController({
		control,
		name,
		rules,
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
