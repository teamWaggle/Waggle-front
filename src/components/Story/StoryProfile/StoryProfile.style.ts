import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const profileStyle = css({
	width: "33px",
	height: "33px",
	borderRadius: "50%",
	objectFit: "cover",
});

export const moreButtonStyle = css({
	cursor: "pointer",
	width: "10px",
	height: "10px",
	position: "relative",
});

export const menuStyle = css({
	position: "absolute",
	top: "-2px",
	right: "10px",
	width: "63px",
	border: `1px solid ${Theme.color.border}`,
	borderRadius: "2px",

	"& > li": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "10px",
		fontWeight: 600,
		backgroundColor: Theme.color.white,
		color: Theme.color.text,
		height: "22px",

		"&:last-of-type": {
			borderTop: `1px solid ${Theme.color.border}`,
		},
	},
});
