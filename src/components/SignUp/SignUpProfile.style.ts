import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const buttonStyle = css({
	all: "unset",
	padding: "8px 14px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
});

export const dividerStyle = css({
	margin: "20px auto 40px",
});

export const addressInputStyle = css({
	all: "unset",
	boxSizing: "border-box",
	width: "220px",
	borderBottom: `1px solid ${Theme.color.border}`,
	color: Theme.color.input_text,
	fontWeight: 500,
	fontSize: "16px",

	"&::placeholder": {
		color: Theme.color.disabled_text,
	},
});

export const getNextButtonStyle = (text: string) => {
	return css({
		all: "unset",
		padding: "8px 14px",
		borderRadius: "4px",
		backgroundColor: text === "이전" ? Theme.color.disabled_text : Theme.color.brand_primary,
		color: Theme.color.white,
		fontWeight: 600,
	});
};
