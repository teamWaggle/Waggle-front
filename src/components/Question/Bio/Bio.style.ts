import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const sectionStyle = css({
	width: "100%",
	backgroundColor: Theme.color.brand_primary,
});

export const boxStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "50px 146px",
});

export const titleStyle = css({
	color: "#fdfdfd",
	fontFamily: "Pretendard",
	fontSize: "30px",
	fontWeight: 700,
	lineHeight: "normal",
	letterSpacing: "-0.62px",
});

export const buttonStyle = css({
	all: "unset",
	backgroundColor: Theme.color.white,
	padding: "8px",
});
