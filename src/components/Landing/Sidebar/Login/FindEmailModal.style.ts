import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	backgroundColor: Theme.color.white,
	borderRadius: "8px",
	padding: "62px 65px 0",
	width: "460px",
	height: "580px",
});

export const headingStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
	fontSize: "22px",
});

export const textStyle = css({
	color: Theme.color.text,
	fontWeight: 500,
	textAlign: "center",
});

export const formTextStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
	paddingLeft: "8px",
});

export const inputStyle = css({
	width: "330px",
	height: "44px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
	padding: "0 18px",
	color: Theme.color.input_text,
	fontWeight: 500,

	"&::placeholder": {
		color: Theme.color.border,
	},
});

export const selectBoxStyle = css({
	width: "100px",
	height: "44px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
	backgroundColor: Theme.color.white,
	padding: "10px 18px",
	position: "relative",
	color: Theme.color.border,
	fontWeight: 500,

	"& > svg": {
		position: "absolute",
		top: "18px",
		right: "20px",
	},
});
