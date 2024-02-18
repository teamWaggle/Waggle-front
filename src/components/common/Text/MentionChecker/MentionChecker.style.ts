import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const mentionBoxStyle = css({
	wordBreak: "break-word",
	width: "300px",
	display: "inline",
	whiteSpace: "normal",
});

export const mentionCheckerStyle = css({
	color: Theme.color.brand_primary,
	display: "inline",
	fontSize: "14px",
});

export const mentionCheckerDefaultStyle = css({
	color: Theme.color.text,
	display: "inline",
	fontSize: "14px",
});
