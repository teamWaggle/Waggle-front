import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const titleStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
});

export const buttonStyle = css({
	padding: "12px 58px",
	borderRadius: "6px",
	backgroundColor: Theme.color.brand_primary,
	cursor: "pointer",
	border: "none",
	outline: "none",
});

export const textStyle = css({
	color: Theme.color.white,
	fontWeight: 600,
	fontFamily: "Pretendard",
});

export const subTextStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 500,
	cursor: "pointer",
});
