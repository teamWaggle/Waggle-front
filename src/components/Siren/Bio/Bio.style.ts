import { Theme } from "@/styles/Theme";
import { css } from "@emotion/react";

export const sectionStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "0 146px",
});

export const titleStyle = css({
	color: Theme.color.text,
	fontFamily: "Pretendard",
	fontSize: "30px",
	fontWeight: 700,
	lineHeight: "normal",
	letterSpacing: "-0.62px",
});

export const buttonStyle = css({
	all: "unset",
	backgroundColor: Theme.color.brand_primary,
	padding: "8px",
});
