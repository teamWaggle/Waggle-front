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

export const keywordBoxStyle = css({
	gap: "18px",
	color: Theme.color.black,
	fontWeight: 600,
});
