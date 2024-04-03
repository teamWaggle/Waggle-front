import type React from "react";
import type { FieldPath, FieldValues } from "react-hook-form";
import { useFormContext, useController, useFormState } from "react-hook-form";

export const useControlledTextForm = (name: FieldPath<FieldValues>) => {
	const { control, trigger } = useFormContext();
	const { field } = useController({
		control,
		name,
	});
	const { errors } = useFormState({ control, name });
	const isValid = !errors[name];
	const errorMessage = errors[name]?.message as string;
	const handleOnChange = (
		e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		field.onChange({ target: { value: e.target.value } });
		trigger(name);
	};
	return { handleOnChange, isValid, errorMessage };
};
