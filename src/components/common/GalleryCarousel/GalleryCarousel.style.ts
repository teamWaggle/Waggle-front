import { css } from "@emotion/react";

export const mediaBoxStyle = (width: number, height: number, borderRadius: string) =>
	css({
		width,
		height,
		position: "relative",

		"& > img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			borderRadius,
		},
	});

export const buttonBoxStyle = css({
	"& > button": {
		width: "30px",
		height: "30px",
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		cursor: "pointer",
		top: "50%",
		transform: "translateY(-50%)",
		border: "none",
		outline: "none",
	},
});

export const leftButtonStyle = css({
	left: "20px",
});

export const rightButtonStyle = css({
	right: "20px",
});

export const carouselBoxStyle = css({
	display: "flex",
	overflow: "hidden",
});

export const carouselItemStyle = (width: number, height: number, borderRadius: string) =>
	css({
		display: "flex",

		"& > *": {
			objectFit: "cover",
			width,
			height,
			borderRadius,
		},
	});
