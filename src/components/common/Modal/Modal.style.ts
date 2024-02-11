import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const backdropStyle = css({
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: 3,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(9, 4, 4, 0.53)",
	backdropFilter: "blur(10px)",
	cursor: "pointer",
});

export const dialogStyle = css({
	position: "fixed",
	top: "50%",
	transform: "translateY(-50%)",
	zIndex: 4,
	display: "block",
	margin: "0 auto",
	backgroundColor: Theme.color.transparent,
	border: "none",
});

export const closeButtonStyling = css({
	position: "absolute",
	right: "24px",
	top: "24px",
	cursor: "pointer",
	width: "16px",
	height: "16px",
});
