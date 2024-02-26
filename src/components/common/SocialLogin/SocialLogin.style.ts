import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = (locate: string) => {
	return css({
		flexDirection: "column",
		alignItems: "center",
		marginTop: locate === "login" ? "24px" : 0,
	});
};

export const socialButtonStyle = (locate: string) => {
	return css({
		gap: "20px",
		marginTop: locate === "login" ? "16px" : "30px",

		"& > svg": {
			cursor: "pointer",
		},
	});
};

export const getTextStyle = (locate: string) => {
	return css({
		color: Theme.color.border,
		fontWeight: 500,
		position: "relative",

		"&:before, &:after": {
			position: "absolute",
			top: "9px",
			left: locate === "login" ? "-126px" : "-164px",
			content: "''",
			width: locate === "login" ? "116px" : "154px",
			height: "1px",
			backgroundColor: Theme.color.border,
		},

		"&:after": {
			left: "auto",
			right: locate === "login" ? "-126px" : "-164px",
		},
	});
};
