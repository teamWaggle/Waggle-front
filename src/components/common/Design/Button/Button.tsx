import type { ComponentPropsWithRef, ForwardedRef } from "react";
import { forwardRef } from "react";

import type { Size } from "@/types/common";

import {
	buttonStyle,
	buttonVariantStyle,
	buttonSizeStyle,
} from "@/components/common/Design/Button/Button.style";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
	size?: Extract<Size, "medium" | "large">;
	variant?: "default" | "gray" | "white";
}

const Button = (
	{ size = "medium", variant = "default", children, ...attributes }: ButtonProps,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
	return (
		<button
			ref={ref}
			css={[buttonStyle, buttonVariantStyle(variant), buttonSizeStyle(size)]}
			{...attributes}
		>
			{children}
		</button>
	);
};

export default forwardRef(Button);
