import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const MemberSliderBoxStyle = (currentIndex: number) =>
	css({
		width: "760px",
		height: "fit-content",
		gap: "10px",
		transition: "transform 0.5s ease",
		transform: `translateX(-${currentIndex * 190}px)`,
	});

export const rightArrowIconStyle = css({
	position: "absolute",
	right: "-2%",
	top: "10%",

	"& > path": {
		fill: Theme.color.readonly_text,
	},
	cursor: "pointer",
});
export const leftArrowIconStyle = css({
	position: "absolute",
	left: "-3%",
	top: "10%",
	"& > path": {
		fill: Theme.color.readonly_text,
	},
	cursor: "pointer",
});
