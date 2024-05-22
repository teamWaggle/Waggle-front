import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import {
  radioLabelStyle,
  radioButtonStyle,
} from "@/components/common/Button/PublicRadioButton/PublicRadioButton.style";

interface PublicRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<string>;
}

const PublicRadioButton = ({ register, value, ...props }: PublicRadioButtonProps) => {
  return (
    <label css={radioLabelStyle} htmlFor="public">
      <input
        type="radio"
        css={radioButtonStyle}
        value={value}
        id="public"
        {...register}
        {...props}
      />
    </label>
  );
};

export default PublicRadioButton;
