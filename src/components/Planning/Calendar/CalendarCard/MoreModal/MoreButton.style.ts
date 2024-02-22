import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const moreTextStyle = css({
	cursor: "pointer",
	marginLeft: "16px",
});

export const moreBoxStyle = css({
	position: "relative",
	color: Theme.color.text,
	fontSize: Theme.text.xSmall.fontSize,
	lineHeight: Theme.text.xSmall.lineHeight,
});
