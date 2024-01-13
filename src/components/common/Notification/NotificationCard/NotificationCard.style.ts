import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	boxShadow: "0px 2px 7px 0px rgba(0, 40, 37, 0.10)",
	backgroundColor: Theme.color.white,
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
