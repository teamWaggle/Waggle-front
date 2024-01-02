import { Theme } from "@/styles/Theme";
import { css } from "@emotion/react";

export const boxStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "0 196px",
});

export const titleStyle = css({
	color: Theme.color.text,
	fontFamily: "Pretendard",
	fontWeight: 700,
	letterSpacing: "-0.62px",
});

export const buttonStyle = css({
	all: "unset",
	backgroundColor: Theme.color.brand_primary,
	padding: "6px 12px",
	fontWeight: 600,
	color: Theme.color.white,
	borderRadius: "4px",
});
