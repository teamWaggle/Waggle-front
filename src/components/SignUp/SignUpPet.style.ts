import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const headingStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
});

export const textareaStyle = css({
	all: "unset",
	boxSizing: "border-box",
	resize: "none",
	width: "444px",
	height: "70px",
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

export const addCardButtonStyle = css({
	all: "unset",
	boxSizing: "border-box",
	width: "554px",
	height: "44px",
	textAlign: "center",
	marginTop: "30px",
	borderRadius: "2px",
	backgroundColor: Theme.color.brand_primary,
	color: Theme.color.white,
	fontWeight: 600,
});
