import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const searchStyle = css({
	position: "relative",
	padding: "2px 12px",
	borderRadius: "27.5px",
	border: `1px solid ${Theme.color.brand_primary}`,
	width: "calc(100% - 152px)",
	height: "34px",
	boxShadow: Theme.boxShadow.shadow2,
});

export const inputStyle = css({
	width: "calc(100% - 42px)",
	border: "none",
	outline: "none",
	background: Theme.color.transparent,
});

export const textStyle = css({
	color: Theme.color.readonly_text,
	position: "absolute",
});

export const buttonStyle = css({
	all: "unset",
	position: "absolute",
	right: "14px",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});
