import { css } from "@emotion/react";

export const gridBoxStyle = css({
	display: "flex",
	justifyContent: "space-between",
});

export const sliderBoxStyle = (currentIndex: number) =>
	css({
		width: "100%",
		height: "fit-content",
		display: "inline-grid",
		gap: "20px",
		transition: "transform 0.5s ease",
		transform: `translateX(-${currentIndex * 290}px)`,
		gridTemplateColumns: "repeat(7, 1fr)",
	});

export const rightArrowIconStyle = css({
	position: "absolute",
	right: "-5%",
	top: "37%",
	cursor: "pointer",
});
export const leftArrowIconStyle = css({
	position: "absolute",
	left: "-5%",
	top: "37%",
	cursor: "pointer",
});
