import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

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
	gap: "9px",
	justifyContent: "center",
	bottom: "20px",
});

export const imgDotStyle = (currentIndex: boolean) => {
	return css({
		backgroundColor: currentIndex ? Theme.color.brand_primary : Theme.color.border,
		width: "12px",
		height: "12px",
		borderRadius: "50%",
	});
};
