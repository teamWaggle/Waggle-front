import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "110px 196px",
});

export const headingStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
	marginTop: "14px",
});

export const boxStyle = css({
	"&:after": {
		position: "absolute",
		top: "25px",
		left: "81px",
		content: "''",
		width: "126px",
		height: "1px",
		backgroundColor: Theme.color.border,
	},

	"&:last-of-type::after": {
		content: "none",
	},
});

boxStyle;

export const circleBoxStyle = css({
	width: "25px",
	height: "25px",
	backgroundColor: Theme.color.brand_primary,
	color: Theme.color.white,
	borderRadius: "50%",
});

export const circleNumberStyle = css({
	textAlign: "center",
	fontFamily: "Montserrat",
	fontWeight: 600,
});

export const circleTextStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
});
