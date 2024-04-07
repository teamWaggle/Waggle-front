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
		outline: css({
			backgroundColor: Theme.color.white,
			color: Theme.color.disabled_text,
			border: `1px solid ${Theme.color.border}`,
			height: "44px",
		}),
		white: css({
			backgroundColor: Theme.color.white,
			color: Theme.color.brand_primary,
		}),
		text: css({
			backgroundColor: Theme.color.white,
			color: Theme.color.brand_primary,
		}),
	};

	return style[variant];
};

export const buttonSizeStyle = (size: Required<ButtonProps>["size"]) => {
	const style = {
		small: css({
			padding: "8px 10px",
			fontSize: Theme.text.medium.fontSize,
		}),
		medium: css({
			height: "44px",
			width: "310px",
			fontSize: Theme.text.medium.fontSize,
		}),
		large: css({
			width: "331px",
			height: "44px",
			fontSize: Theme.text.medium.fontSize,
		}),
		xLarge: css({
			width: "412px",
			height: "44px",
			fontSize: Theme.text.medium.fontSize,
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
