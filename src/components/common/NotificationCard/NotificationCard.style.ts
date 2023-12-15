import { Theme } from "@/styles/Theme";
import { css } from "@emotion/react";

export const layoutStyle = css({
	boxShadow: "0px 2px 7px 0px rgba(0, 40, 37, 0.10)",
});

export const imgStyle = css({
	width: "52px",
	height: "52px",
	borderRadius: "50%",
});

export const textStyle = css({
	color: Theme.color.readonly_text,
	fontFamily: "Pretendard",
	fontWeight: 500,
	lineHeight: "normal",
});
