import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const participationSliderBoxStyle = (currentIndex: number) =>
	css({
		width: "780px",
		height: "fit-content",
		gap: "10px",
		transition: "transform 0.5s ease",
		transform: `translateX(-${currentIndex * 264}px)`,
	});

export const approveButtonStyle = css({
	width: "40px",
	justifyContent: "center",
	alignItems: "center",
	height: "32px",
	borderRadius: "4px",
	backgroundColor: Theme.color.btn_danger,
	color: Theme.color.white,
	border: "none",
	cursor: "pointer",
});

export const rejectButtonStyle = css({
	width: "40px",
	justifyContent: "center",
	alignItems: "center",
	height: "32px",
	borderRadius: "4px",
	backgroundColor: Theme.color.disabled_text,
	color: Theme.color.white,
	border: "none",
	cursor: "pointer",
});

export const rightArrowIconStyle = css({
	position: "absolute",
	right: "-3.7%",
	top: "10%",
	cursor: "pointer",
});
export const leftArrowIconStyle = css({
	position: "absolute",
	left: "-4%",
	top: "10%",
	cursor: "pointer",
});
