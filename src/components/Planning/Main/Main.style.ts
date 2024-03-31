import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const flexStyle = css({
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: "52px",
	marginBottom: "23px",
});

export const gridBoxStyle = css({
	display: "grid",
	width: "100%",
	gridTemplateColumns: "repeat(4, 1fr)",
	justifyContent: "space-evenly",
	gap: "20px",
});

export const headingStyle = css({
	color: Theme.color.brand_primary,
	fontWeight: 600,
	fontSize: "26px",
	width: "100%",
});

export const buttonStyle = css({
	backgroundColor: Theme.color.brand_primary,
	width: "116px",
	height: "40px",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	color: Theme.color.white,
});

export const searchStyle = css({
	position: "relative",
	padding: "0 12px",
	borderRadius: "27.5px",
	border: `1px solid ${Theme.color.brand_primary}`,
	width: "247px",
	height: "34px",
	boxShadow: "0px 2px 5px 0px rgba(0, 40, 37, 0.1)",
});

export const searchInputStyle = css({
	height: "32px",
	width: "247px",
	paddingRight: "20px",
	border: "none",
	outline: "none",
	borderRadius: "27.5px",
	background: Theme.color.transparent,
});

export const searchButtonStyle = css({
	all: "unset",
	position: "absolute",
	top: "2px",
	right: "6px",
	cursor: "pointer",
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
