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
	height: "100%",
	overflowX: "auto",
	msOverflowStyle: "none",
	scrollbarWidth: "none",

	"&::-webkit-scrollbar": {
		display: "none",
	},
});

export const sliderBoxStyle = (width: string) => {
	return css({
		display: "flex",
		alignItems: "center",
		width: width,
	});
};

export const imgStyle = (width: number) => {
	return css({
		width: width,
		height: "100%",
		objectFit: "cover",
		borderRadius: "42px 0 0 42px",
	});
};

export const arrowBoxStyle = (direction: string) => {
	return css({
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		left: direction === "left" ? "20px" : "auto",
		right: direction === "right" ? "20px" : "auto",
	});
};
