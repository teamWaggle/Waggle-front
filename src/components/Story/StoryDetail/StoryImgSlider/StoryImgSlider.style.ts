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
		height: "100%",

		"& > img": {
			width: "740px",
			height: "100%",
			objectFit: "cover",
			borderRadius: "42px 0 0 42px",
		},
	});
};
