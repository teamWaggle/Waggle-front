import { css } from "@emotion/react";

export const layoutStyle = css({
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	position: "relative",
});

export const imgBoxStyle = css({
	display: "flex",
	alignItems: "center",

	"& > img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
});
