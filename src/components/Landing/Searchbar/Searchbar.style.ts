import { css } from "@emotion/react";
import { Theme } from "@/styles/Theme";

export const searchStyle = css({
	position: "relative",
	padding: "0 8px",
	borderRadius: "27.5px",
	border: `2px solid ${Theme.color.brand_primary}`,
	width: "calc(100% - 162px)",
	height: "55px",
	boxShadow: "0px 2px 5px 0px rgba(0, 40, 37, 0.1)",
});

export const inputStyle = css({
	width: "calc(100% - 42px)",
	border: "none",
	outline: "none",
	background: Theme.color.transparent,
});

export const buttonStyle = css({
	all: "unset",
	position: "absolute",
	top: "14px",
	right: "14px",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});
