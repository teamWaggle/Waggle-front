import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const mentionCheckerStyle = css({
	color: Theme.color.brand_primary,
	display: "inline",
});

export const mentionCheckerDefaultStyle = css({
	color: Theme.color.text,
	display: "inline",
});

export const mentionBoxStyle = css({
	wordBreak: "break-word",
	width: "350px",
	whiteSpace: "normal",
	// width: "fit-content",
});
