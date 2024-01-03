import { css } from "@emotion/react";
import { Theme } from "@styles/Theme";

export const boxStyle = css({
	maxWidth: "1536px",
	padding: "0 196px",
	margin: "60px auto 0",
});

export const imgStyle = css({
	width: "50px",
	height: "50px",
	borderRadius: "50%",
});

export const nameStyle = css({
	color: Theme.color.text,
	fontWeight: 500,
});

export const dateStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 500,
});

export const textStyle = css({
	color: Theme.color.text,
	fontWeight: 500,
});

export const replyBoxStyle = css({
	position: "absolute",
	top: 0,
	right: 0,
	color: Theme.color.readonly_text,
	fontWeight: 500,
	cursor: "pointer",
});
