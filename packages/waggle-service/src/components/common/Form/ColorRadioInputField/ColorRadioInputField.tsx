import type { FieldPath, FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import { Flex } from "waggle-design-system";

import ColorRadioButton from "@/components/common/Button/ColorRadioButton/ColorRadioButton";

import { TEAM_COLOR } from "@/constants/team";

const ColorRadioInputField = ({ name }: { name: FieldPath<FieldValues> }) => {
  const { register } = useFormContext();

  return (
    <Flex styles={{ align: "center", width: "100%", justify: "space-between" }}>
      {TEAM_COLOR.map((color) => {
        return <ColorRadioButton key={color} color={color} register={register(name)} />;
      })}
    </Flex>
  );
};
export default ColorRadioInputField;
