import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "0 196px",
	marginTop: "70px",
});

export const inputStyle = css({
	all: "unset",
	fontSize: "26px",
	color: Theme.color.text,
	margin: "56px 0 6px",

	"&::place-holder": {
		color: Theme.color.disabled_text,
	},
});

export const tagStyle = (color: string) => {
	return css({
		justifyContent: "center",
		alignItems: "center",
		padding: "4px 10px",
		borderRadius: "18px",
		backgroundColor: color,
		color: Theme.color.text,
		cursor: "pointer",
		fontWeight: 500,
	});
};
