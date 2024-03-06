import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	width: "1060px",
	height: "736px",
	backgroundColor: Theme.color.white,
	borderRadius: "42px",
	border: `5px solid ${Theme.color.brand_primary}`,
	boxShadow: Theme.boxShadow.shadow1,
	position: "relative",
});

export const contentBoxStyle = css({
	maxWidth: "270px",
});

export const commentLayoutStyle = css({
	width: "100%",
	overflow: "auto",
	height: "450px",
	msOverflowStyle: "none",
	scrollbarWidth: "none",
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	padding: "20px 0",

	"&::-webkit-scrollbar": {
		display: "none",
	},
});

export const commentBoxStyle = css({
	maxWidth: "215px",
});

export const handleReplyTextStyle = css({
	cursor: "pointer",
	color: Theme.color.readonly_text,
	fontWeight: 500,
});

export const getCommentTextStyle = (isReply: boolean) => {
	return css({
		color: Theme.color.text,
		fontWeight: 500,
		paddingLeft: isReply ? "0px" : "43px",
		margin: "-6px 0 2px",
		wordWrap: "break-word",
	});
};

export const getReplyInputStyle = (width: string) => {
	return css({
		all: "unset",
		boxSizing: "border-box",
		borderBottom: `1px solid ${Theme.color.brand_primary}`,
		padding: "8px 30px 8px 0",
		color: Theme.color.black,
		fontSize: "12px",
		fontWeight: 500,
		width: width,

		"&::placeholder": {
			color: Theme.color.disabled_text,
		},
	});
};

export const replyDateTextStyle = css({
	fontSize: "10px",
	lineHeight: "12px",
	fontWeight: 500,
	color: Theme.color.readonly_text,
	marginTop: "4px",
});

export const replyButtonStyle = css({
	all: "unset",
	fontSize: "14px",
	fontWeight: 600,
	color: Theme.color.brand_primary,
	position: "absolute",
	right: 0,
	bottom: "8px",
});
