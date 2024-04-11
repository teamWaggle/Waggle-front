import type { FieldPath, FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import { Flex } from "@/components/common";
import ColorRadioButton from "@/components/common/Button/ColorRadioButton/ColorRadioButton";

import { TEAM_COLOR } from "@/constants/team";

import { ColorRadioInputFieldStyle } from "@/components/common/Form/ColorRadioInputField/ColorRadioInputField.style";

const ColorRadioInputField = ({ name }: { name: FieldPath<FieldValues> }) => {
  const { register } = useFormContext();

  return (
    <Flex css={ColorRadioInputFieldStyle}>
      {TEAM_COLOR.map((color) => {
        return <ColorRadioButton key={color} color={color} register={register(name)} />;
      })}
    </Flex>
  );
};
export default ColorRadioInputField;
