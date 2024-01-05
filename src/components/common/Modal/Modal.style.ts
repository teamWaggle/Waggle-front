import { css } from "@emotion/react";
import { Theme } from "@styles/Theme";

export const backdropStyle = css({
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: 3,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(0,0,0,0.4)",
	cursor: "pointer",
});

export const dialogStyle = css({
	position: "fixed",
	top: "50%",
	transform: "translateY(-50%)",
	zIndex: 4,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	minWidth: "300px",
	padding: "24px",
	margin: "0 auto",

	border: "none",
	borderRadius: "16px",

	backgroundColor: Theme.color.white,
	boxShadow: Theme.boxShadow.shadow2,
});

export const closeButtonStyling = css({
	position: "absolute",
	right: "24px",
	top: "24px",
	alignSelf: "flex-end",

	marginBottom: Theme.spacer.spacing1,

	border: "none",
	backgroundColor: "transparent",

	cursor: "pointer",
});

export const closeIconStyling = css({
	width: "16px",
	height: "16px",
});
