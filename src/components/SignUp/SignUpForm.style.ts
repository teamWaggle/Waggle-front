import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const textStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
	paddingLeft: "8px",
});

export const emailInputStyle = css({
	width: "280px",
	height: "44px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
	padding: "0 18px",
	color: Theme.color.input_text,
	fontWeight: 500,
	fontSize: "16px",

	"&::placeholder": {
		color: Theme.color.border,
	},
});

export const inputStyle = css({
	width: "412px",
	height: "44px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
	padding: "0 18px",
	color: Theme.color.input_text,
	fontWeight: 500,
	fontSize: "16px",

	"&::placeholder": {
		color: Theme.color.border,
	},
});

export const buttonStyle = css({
	all: "unset",
	boxSizing: "border-box",
	width: "104px",
	height: "44px",
	border: `1px solid ${Theme.color.border}`,
	borderRadius: "4px",
	textAlign: "center",
	cursor: "pointer",
});

export const buttonTextStyle = css({
	color: Theme.color.disabled_text,
	fontWeight: 500,
});

export const passwordCheckTextStyle = css({
	color: Theme.color.disabled_text,
	fontWeight: 500,
});
