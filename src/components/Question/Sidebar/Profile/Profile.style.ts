import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	boxShadow: "box-shadow: 0px 2px 7px 0px rgba(0, 40, 37, 0.10)",
	fontFamily: "Pretendard",
	lineHeight: "normal",
});

export const titleStyle = css({
	color: Theme.color.text,
	fontSize: "29px",
	fontWeight: 700,
});

export const textStyle = css({
	color: Theme.color.readonly_text,
	fontSize: "15px",
	fontWeight: 500,
});
