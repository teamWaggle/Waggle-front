import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

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
		height: "100%",
	});
};

export const imgStyle = (width?: number, isUpload?: boolean) => {
	return css({
		width: width,
		height: "100%",
		objectFit: "cover",
		borderRadius: isUpload ? "0 0 0 42px" : "42px 0 0 42px",
	});
};

export const arrowBoxStyle = (isShow: boolean) => {
	return css({
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		cursor: "pointer",
		display: isShow ? "none" : "flex",

		"&.leftArrow": {
			left: "20px",
		},

		"&.rightArrow": {
			right: "20px",
		},
	});
};

export const imgDotBoxStyle = css({
	position: "absolute",
	width: "100%",
	display: "flex",
	gap: "9px",
	justifyContent: "center",
	bottom: "20px",
});

export const imgDotStyle = (currentIndex: boolean) => {
	return css({
		backgroundColor: currentIndex ? Theme.color.white : Theme.color.border,
		width: "12px",
		height: "12px",
		borderRadius: "50%",
	});
};
