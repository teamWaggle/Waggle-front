import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

import type { ButtonProps } from "@/components/common/Design/Button/Button";

export const buttonVariantStyle = (variant: Required<ButtonProps>["variant"]) => {
	const style = {
		default: css({
			backgroundColor: Theme.color.brand_primary,
			color: Theme.color.white,
		}),
		gray: css({
			backgroundColor: Theme.color.disabled_text,
			color: Theme.color.white,
		}),
		white: css({
			backgroundColor: Theme.color.white,
			color: Theme.color.disabled_text,
			border: `1px solid ${Theme.color.border}`,
			height: "44px",
		}),
	};

	return style[variant];
};

export const buttonSizeStyle = (size: Required<ButtonProps>["size"]) => {
	const style = {
		medium: css({
			padding: "8px 14px",
			fontSize: Theme.text.medium.fontSize,
			lineHeight: Theme.text.medium.lineHeight,
		}),
		large: css({
			width: "412px",
			height: "44px",
			fontSize: Theme.text.medium.fontSize,
			lineHeight: Theme.text.medium.lineHeight,
		}),
	};

	return style[size];
};

export const buttonStyle = css({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	border: "none",
	borderRadius: "4px",
	outline: "none",
	backgroundColor: Theme.color.white,
	fontWeight: 500,
	cursor: "pointer",
	fontFamily: "Pretendard",

	"&:disabled": {
		opacity: ".4",
	},
});
