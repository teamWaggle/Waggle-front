import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const cardStyle = css({
	backgroundColor: "#FEFEFE",
	filter: "drop-shadow(0px 2px 12px rgba(0, 40, 37, 0.10))",
	borderRadius: "20px",
	flexDirection: "column",
	position: "relative",

	"& > img": {
		width: "279px",
		height: "224px",
		objectFit: "cover",
		borderRadius: "20px 20px 0 0",
	},
});

export const tagBoxStyle = css({
	position: "absolute",
	top: "10px",
	left: "16px",
	alignItems: "center",
	gap: "10px",
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

export const infoStyle = css({
	borderRadius: "0 0 20px 20px",
	padding: "10px 16px 6px",
	width: "100%",
	flexDirection: "column",
});

export const subStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 600,
	marginTop: "6px",
});

export const bottomBoxStyle = css({
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: "16px",
	width: "100%",
});

export const textStyle = css({
	color: Theme.color.brand_primary,
	fontWeight: 600,
	marginTop: "6px",
});
