import { Theme } from "@/styles/Theme";
import { css } from "@emotion/react";

export const sectionStyle = css({
	maxWidth: "1536px",
	margin: "76px auto 0",
	padding: "0 196px",
});

export const tagStyle = css({
	padding: "6px 12px",
	borderRadius: "18px",
	backgroundColor: Theme.color.btn_01,
	color: Theme.color.text,
	cursor: "pointer",
});

export const tagDisabledStyle = css({
	padding: "6px 12px",
	borderRadius: "18px",
	backgroundColor: Theme.color.btn_success,
	color: Theme.color.white,
	cursor: "pointer",
});

export const searchStyle = css({
	position: "relative",
	padding: "0 12px",
	borderRadius: "27.5px",
	border: `1px solid ${Theme.color.brand_primary}`,
	width: "510px",
	height: "34px",
	boxShadow: "0px 2px 5px 0px rgba(0, 40, 37, 0.1)",
});

export const inputStyle = css({
	width: "460px",
	border: "none",
	outline: "none",
	background: Theme.color.transparent,
});

export const buttonStyle = css({
	all: "unset",
	position: "absolute",
	top: "2px",
	right: "6px",
	cursor: "pointer",
});
