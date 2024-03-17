import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const titleBoxStyle = css({
	flexDirection: "column",
	gap: "12px",
	marginBottom: "18px",
	position: "relative",
	width: "100%",
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

export const profileStyle = css({
	alignItems: "center",
	color: Theme.color.disabled_text,
	fontWeight: 500,

	"& > img": {
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		objectFit: "cover",
	},

	span: {
		marginLeft: "14px",
	},
});
