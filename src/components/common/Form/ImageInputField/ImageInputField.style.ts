import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const imageInputBoxStyle = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "4px",
	width: "200px",
	height: "200px",
});

export const imageInputStyle = css({
	display: "none",
});

export const imageBoxStyle = (isFile: boolean) =>
	css({
		display: "flex",
		backgroundColor: isFile ? "none" : Theme.color.brand_primary,
		width: "200px",
		height: "200px",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "20px",
		cursor: "pointer",
		objectFit: "cover",
	});
export const imageStyle = css({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "20px",
});
export const resetImageButtonStyle = css({
	color: Theme.color.white,
	cursor: "pointer",
	backgroundColor: Theme.color.brand_primary,
	width: "100%",
	justifyContent: "center",
	borderRadius: "20px",
});
