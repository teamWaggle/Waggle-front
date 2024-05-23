import type { FieldValues, SubmitHandler } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";

import ColorRadioInputField from "@/components/common/Form/ColorRadioInputField/ColorRadioInputField";
import DateRangeInputField from "@/components/common/Form/DateRangeInputField/DateRangeInputField";
import ImageInputField from "@/components/common/Form/ImageInputField/ImageInputField";
import TimeRangeInputField from "@/components/common/Form/TimeRangeInputField/TimeRangeInputField";
import TextInputField from "@/components/common/Form/TextInputField/TextInputField";
import PasswordInputField from "@/components/common/Form/PasswordInputField/PasswordInputField";
import { yupResolver } from "@hookform/resolvers/yup";

import type * as yup from "yup";
import ResetButton from "@/components/common/Form/ResetButton/ResetButton";
import DropdownInputField from "@/components/common/Form/DropdownInputField/DropdownInputField";

const Form = ({
  children,
  onSubmit,
  defaultValues,
  schema,
}: {
  children: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
  defaultValues: FieldValues;
  schema: yup.ObjectSchema<FieldValues>;
}) => {
  const method = useForm<FieldValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

Form.DropDownInputField = DropdownInputField;
Form.ColorRadioInputField = ColorRadioInputField;
Form.ImageInputField = ImageInputField;
Form.TextInputField = TextInputField;
Form.DateRangeInputField = DateRangeInputField;
Form.TimeRangeInputField = TimeRangeInputField;
Form.PasswordInputField = PasswordInputField;
Form.ResetButton = ResetButton;

export default Form;
