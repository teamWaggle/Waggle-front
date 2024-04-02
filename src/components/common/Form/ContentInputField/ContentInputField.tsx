import type { FieldValues, RegisterOptions } from "react-hook-form";
import { useFormState } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

import { InputNotice } from "@/components/common";

import { contentTextareaStyle } from "@/components/common/Form/ContentInputField/ContentInputField.style";

const ContentInputField = ({
	name,
	placeholder,
	validateText,
	rules,
}: {
	name: keyof FieldValues;
	placeholder: string;
	validateText: string;
	rules: Pick<
		RegisterOptions<FieldValues>,
		"maxLength" | "minLength" | "validate" | "required" | "pattern"
	>;
}) => {
	const { control, trigger } = useFormContext();
	const { field: contentField } = useController({
		control,
		name,
		rules,
	});
	const { errors } = useFormState({ control, name });
	const isValid = !errors[name];

	return (
		<>
			<textarea
				css={contentTextareaStyle(false)}
				placeholder={placeholder}
				onChange={(e) => {
					contentField.onChange({ target: { value: e.target.value } });
					trigger(name);
				}}
			/>
			<InputNotice message={(errors[name]?.message as string) || validateText} isValid={isValid} />
		</>
	);
};
export default ContentInputField;
