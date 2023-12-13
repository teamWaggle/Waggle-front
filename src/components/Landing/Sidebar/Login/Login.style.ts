import { css } from "@emotion/react";
import { Theme } from "@/styles/themetest";

export const layoutStyle = css({
	borderRadius: "20px",
	border: `2px solid ${Theme.color.brand_primary}`,
	boxShadow: "0px 2px 7px 0px rgba(0, 40, 37, 0.1)",
	padding: "36px 16px",
	fontFamily: "Pretendard",
	lineHeight: "normal",
});

export const titleStyle = css({
	color: Theme.color.text,
	fontSize: "20px",
	fontWeight: 700,
});

export const buttonStyle = css({
	all: "unset",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "10px",
	padding: "15px 70px",
	borderRadius: "8px",
	backgroundColor: Theme.color.brand_primary,
});

export const textStyle = css({
	color: Theme.color.white,
	fontWeight: 700,
	whiteSpace: "nowrap",
});

export const subStyle = css({
	color: Theme.color.readonly_text,
	fontSize: "17px",
	fontWeight: 700,
});
