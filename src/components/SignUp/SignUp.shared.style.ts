import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const getFormTextStyle = (form: boolean) => {
	return css({
		color: Theme.color.text,
		fontWeight: 600,
		paddingLeft: form ? "8px" : 0,
	});
};

export const getInputStyle = (width: string) => {
	return css({
		width: width,
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
};

export const getTextareaStyle = (height: string) => {
	return css({
		all: "unset",
		boxSizing: "border-box",
		resize: "none",
		width: "444px",
		height: height,
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
};
