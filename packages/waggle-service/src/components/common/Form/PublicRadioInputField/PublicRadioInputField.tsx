import type { FieldPath, FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import PublicRadioButton from "@/components/common/Button/PublicRadioButton/PublicRadioButton";

const PublicRadioInputField = ({ name }: { name: FieldPath<FieldValues> }) => {
  const { register } = useFormContext();

  return <PublicRadioButton register={register(name)} />;
};

export default PublicRadioInputField;
