import type { InputHTMLAttributes } from "react";

import type { TeamColorType } from "@/types/team";

import {
	ColorRadioButtonStyle,
	ColorRadioLabelStyle,
} from "@/components/common/Button/ColorRadioButton/ColorRadioButton.style";

interface ColorRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	color: TeamColorType;
}

const ColorRadioButton = ({ color, ...props }: ColorRadioButtonProps) => {
	return (
		<label key={color} css={ColorRadioLabelStyle(color)} htmlFor={color}>
			<input css={ColorRadioButtonStyle(color)} type="radio" value={color} id={color} {...props} />
		</label>
	);
};

export default ColorRadioButton;
