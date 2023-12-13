import { Theme } from "@/styles/Theme";
import { css } from "@emotion/react";

export const sectionStyle = css({
	maxWidth: "1536px",
	margin: "70px auto 0",
	padding: "0 146px",
});

export const tagStyle = css({
	padding: "10px 17px",
	borderRadius: "22.5px",
	backgroundColor: Theme.color.btn_success,
	color: Theme.color.white,
	fontFamily: "Pretendard",
	fontSize: "21px",
	fontWeight: 600,
	lineHeight: "normal",
});

export const searchStyle = css({
	position: "relative",
	padding: "0 8px",
	borderRadius: "27.5px",
	border: `2px solid ${Theme.color.brand_primary}`,
	width: "360px",
	height: "55px",
	boxShadow: "0px 2px 5px 0px rgba(0, 40, 37, 0.1)",
});

export const inputStyle = css({
	width: "300px",
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
