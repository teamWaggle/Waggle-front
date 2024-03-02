import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const imgStyle = css({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "4px",
});

export const iconStyle = css({
	position: "absolute",
	top: "12px",
	right: "12px",
});

export const headingStyle = css({
	color: Theme.color.brand_primary,
	fontFamily: "Montserrat",
	fontWeight: 600,
	fontSize: "30px",

	"& > svg": {
		marginLeft: "4px",
	},
});

export const buttonStyle = css({
	all: "unset",
	padding: "6px 8px",
	backgroundColor: Theme.color.brand_primary,
	color: Theme.color.white,
	borderRadius: "4px",
	cursor: "pointer",

	"& > p": {
		lineHeight: "24px",
		fontWeight: 600,
	},
});
