import { css } from "@emotion/react";

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
	right: "-3%",
	top: "10%",
	cursor: "pointer",
});
export const leftArrowIconStyle = css({
	position: "absolute",
	left: "-4%",
	top: "10%",

	cursor: "pointer",
});
