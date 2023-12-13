import { Theme } from "@/styles/Theme";
import { css } from "@emotion/react";

export const sectionStyle = css({
	width: "100%",
	height: "332px",
	backgroundColor: Theme.color.brand_primary,
});

export const textStyle = css({
	color: Theme.color.white,

	fontFamily: "Pretendard",
	fontSize: "30px",
	fontWeight: 700,
	lineHeight: "normal",
	letterSpacing: "-0.6px",
});
