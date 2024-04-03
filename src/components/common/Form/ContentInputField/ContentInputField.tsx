import type { FieldPath, FieldValues } from "react-hook-form";
import { useFormState } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

import { InputNotice } from "@/components/common";

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
	const { control, trigger } = useFormContext();
	const { field: contentField } = useController({
		control,
		name,
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
