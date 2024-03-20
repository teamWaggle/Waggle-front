import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const teamSectionStyle = css({
	marginTop: "50px",
	width: "100%",
	alignItems: "center",
});

export const teamImgStyle = css({
	borderRadius: "20px",
	width: "195px",
	height: "195px",
	objectFit: "cover",
});

export const teamInfoBoxStyle = css({
	marginLeft: "20px",
	width: "100%",
});

export const teamInfoSubTitleStyle = css({
	marginTop: "10px",
	marginBottom: "10px",
	color: Theme.color.text,
});

export const teamInfoNewApplyStyle = css({
	color: Theme.color.btn_danger,
});

export const memberSliderBoxStyle = (currentIndex: number) =>
	css({
		width: "760px",
		height: "fit-content",
		gap: "10px",
		transition: "transform 0.5s ease",
		transform: `translateX(-${currentIndex * 190}px)`,
	});

export const participationSliderBoxStyle = (currentIndex: number) =>
	css({
		width: "780px",
		height: "fit-content",
		gap: "10px",
		transition: "transform 0.5s ease",
		transform: `translateX(-${currentIndex * 264}px)`,
	});
