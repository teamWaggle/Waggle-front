import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const textStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
});

export const buttonStyle = css({
	all: "unset",
	padding: "8px 14px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
});

export const buttonTextStyle = css({
	color: Theme.color.disabled_text,
	fontWeight: 500,
});

export const inputStyle = css({
	width: "444px",
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

export const nicknameTextStyle = css({
	color: Theme.color.brand_primary,
	fontWeight: 500,
});

export const textareaStyle = css({
	all: "unset",
	boxSizing: "border-box",
	resize: "none",
	width: "444px",
	height: "112px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
	padding: "13px 18px",
	color: Theme.color.input_text,
	fontWeight: 500,
	fontSize: "16px",
	overflowWrap: "break-word",
	wordBreak: "break-all",
	whiteSpace: "pre-wrap",

	"&::placeholder": {
		color: Theme.color.border,
	},
});

export const dividerStyle = css({
	margin: "20px auto 0",
});
