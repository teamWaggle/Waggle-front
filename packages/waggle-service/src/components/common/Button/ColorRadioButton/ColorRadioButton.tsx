import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import type { TeamColorType } from "@/types/team";

import {
  ColorRadioButtonStyle,
  ColorRadioLabelStyle,
} from "@/components/common/Button/ColorRadioButton/ColorRadioButton.style";

interface ColorRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  color: TeamColorType;
  register: UseFormRegisterReturn<string>;
}

const ColorRadioButton = ({ color, register, ...props }: ColorRadioButtonProps) => {
  return (
    <label css={ColorRadioLabelStyle(color)} htmlFor={color}>
      <input
        css={ColorRadioButtonStyle(color)}
        type="radio"
        value={color}
        id={color}
        {...register}
        {...props}
      />
    </label>
  );
};

export default ColorRadioButton;
