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

export const replyTextareaStyle = css({
	all: "unset",
	boxSizing: "border-box",
	border: `1px solid ${Theme.color.border}`,
	borderRadius: "4px",
	width: "1078px",
	maxWidth: "1078px",
	height: "130px",
	padding: "14px 74px 14px 14px",
	overflowWrap: "break-word",
	wordBreak: "break-all",
	whiteSpace: "pre-wrap",
	resize: "none",
});

export const submitButtonStyle = css({
	all: "unset",
	position: "absolute",
	bottom: "14px",
	right: "14px",
	padding: "6px 14px",
	borderRadius: "4px",
	backgroundColor: Theme.color.brand_primary,
	color: Theme.color.white,
	fontWeight: "600",
});

export const commentTextareaStyle = css({
	all: "unset",
	boxSizing: "border-box",
	border: `1px solid ${Theme.color.border}`,
	borderRadius: "4px",
	width: "1144px",
	height: "194px",
	padding: "14px 74px 14px 14px",
	overflowWrap: "break-word",
	wordBreak: "break-all",
	whiteSpace: "pre-wrap",
	resize: "none",
});
