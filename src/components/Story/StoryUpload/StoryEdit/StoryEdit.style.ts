import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	width: "1060px",
	height: "790px",
	backgroundColor: Theme.color.white,
	border: `5px solid ${Theme.color.white}`,
	borderRadius: "42px",
	boxShadow: Theme.boxShadow.shadow1,
	flexDirection: "column",
});

export const headerStyle = css({
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "54px",
	padding: "0 36px",
	borderBottom: `1px solid ${Theme.color.border}`,
	position: "relative",

	"& > svg": {
		position: "absolute",
		left: "24px",
	},
});

export const imgBoxStyle = css({
	width: "740px",
	height: "100%",
	alignItems: "center",
	justifyContent: "center",
	borderRight: `1px solid #d2d2d2`,
	position: "relative",

	"& > img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: "0 0 0 42px",
	},
});

export const contentBoxStyle = css({
	flexDirection: "column",
	justifyContent: "space-between",
	padding: "14px 28px",
	width: "319px",
	height: "100%",
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

export const uploadButtonStyle = css({
	alignSelf: "flex-end",
	justifySelf: "flex-end",
	fontWeight: 600,
	color: Theme.color.brand_primary,
	cursor: "pointer",
});

export const imgDotBoxStyle = css({
	position: "absolute",
	width: "100%",
	gap: "9px",
	justifyContent: "center",
	bottom: "20px",
});

export const imgDotStyle = (currentIndex: boolean) => {
	return css({
		backgroundColor: currentIndex ? Theme.color.brand_primary : Theme.color.border,
		width: "12px",
		height: "12px",
		borderRadius: "50%",
	});
};

export const arrowBoxStyle = (isShow: boolean) => {
	return css({
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		cursor: "pointer",
		display: isShow ? "none" : "flex",
		top: "50%",
		backgroundColor: Theme.color.disabled_text,

		"&.leftArrow": {
			left: "20px",
		},

		"&.rightArrow": {
			right: "20px",
		},
	});
};
