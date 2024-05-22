import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import {
  radioLabelStyle,
  radioButtonStyle,
} from "@/components/common/Button/PublicRadioButton/PublicRadioButton.style";

interface PublicRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<string>;
}

const PublicRadioButton = ({ register, ...props }: PublicRadioButtonProps) => {
  return (
    <label css={radioLabelStyle} htmlFor="public">
      <div />
      <input
        type="radio"
        css={radioButtonStyle}
        value="test"
        id="public"
        {...register}
        {...props}
      />
    </label>
  );
};

export default PublicRadioButton;
