import { css } from "@emotion/react";
import { Theme } from "@styles/Theme";

export const layoutStyle = css({
	maxWidth: "1536px",
	margin: "70px auto 0",
	padding: "0 196px",
});

export const tagStyle = css({
	padding: "4px 10px",
	borderRadius: "17px",
	color: Theme.color.text,
	fontWeight: 500,
	backgroundColor: Theme.color.btn_02,
});

export const headingStyle = css({
	color: Theme.color.text,
	fontWeight: 700,
});

export const textStyle = css({
	color: Theme.color.disabled_text,
	fontWeight: 500,
});

export const text2Style = css({
	color: Theme.color.black,
	fontWeight: 500,
	margin: "20px 0",
});

export const text3Style = css({
	color: Theme.color.text,
	marginBottom: "4px",
});

export const inputStyle = css({
	all: "unset",
	borderBottom: `1px solid ${Theme.color.border}`,
	width: "333px",
	paddingBottom: "6px",
});
