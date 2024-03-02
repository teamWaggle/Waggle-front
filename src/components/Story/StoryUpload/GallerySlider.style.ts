import { css } from "@emotion/react";

export const layoutStyle = css({
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
	position: "relative",
});

export const imgBoxStyle = (mediaLength: number) => {
	return css({
		width: `${mediaLength * 106 + (mediaLength - 1) * 12}px`,
		maxWidth: "562px",
		height: "100%",
		display: "flex",
		alignItems: "center",
		overflowX: "auto",
		msOverflowStyle: "none",
		scrollbarWidth: "none",

		"&::-webkit-scrollbar": {
			display: "none",
		},
	});
};

export const sliderBoxStyle = css({
	display: "flex",
	alignItems: "center",
	height: "100%",
	gap: "12px",
});

export const imgStyle = css({
	width: "106px",
	height: "106px",
	objectFit: "cover",
	cursor: "pointer",
});

export const arrowBoxStyle = css({
	all: "unset",
	width: "30px",
	height: "30px",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	display: "flex",

	"&.leftArrow": {
		left: "6px",
	},

	"&.rightArrow": {
		right: "6px",
	},
});
