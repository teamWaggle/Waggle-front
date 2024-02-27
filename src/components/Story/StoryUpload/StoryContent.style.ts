import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	width: "1060px",
	height: "736px",
	backgroundColor: Theme.color.white,
	border: `5px solid ${Theme.color.white}`,
	borderRadius: "42px",
	boxShadow: Theme.boxShadow.shadow1,
	flexDirection: "column",
});

export const headerStyle = css({
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	height: "44px",
	padding: "0 36px",
	borderBottom: `1px solid ${Theme.color.border}`,
});

export const imgBoxStyle = css({
	width: "740px",
	height: "100%",
	borderRight: `1px solid #d2d2d2`,

	"& > img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderBottomLeftRadius: "36px",
	},
});

export const profileImgStyle = css({
	width: "33px",
	height: "33px",
	borderRadius: "50%",
	objectFit: "cover",
});

export const textareaStyle = css({
	all: "unset",
	boxSizing: "border-box",
	width: "100%",
	height: "290px",
	border: `1px solid ${Theme.color.border}`,
	padding: "12px",
	fontWeight: 500,
	fontSize: "16px",
	overflowWrap: "break-word",
	wordBreak: "break-all",
	whiteSpace: "pre-wrap",

	"&::placeholder": {
		color: Theme.color.disabled_text,
	},
});

export const lengthTextStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 500,
	alignSelf: "flex-end",
});
