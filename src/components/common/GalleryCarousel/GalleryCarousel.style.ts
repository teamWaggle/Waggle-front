import { css } from "@emotion/react";

export const carouselStyle = (width: number, height: number, borderRadius: string) =>
	css({
		position: "relative",
		width,
		height,
		minWidth: width,
		minHeight: height,
		borderRadius,
		overflow: "hidden",

		"& *": {
			userSelect: "none",
		},

		"& > img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			borderRadius: borderRadius,
		},
	});
