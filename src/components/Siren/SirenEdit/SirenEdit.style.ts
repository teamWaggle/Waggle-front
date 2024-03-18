import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "0 196px 132px",
	marginTop: "70px",
});

export const inputStyle = css({
	all: "unset",
	fontSize: "26px",
	color: Theme.color.text,
	margin: "56px 0 6px",

	"&::place-holder": {
		color: Theme.color.disabled_text,
	},
});

export const tagStyle = (color: string) => {
	return css({
		justifyContent: "center",
		alignItems: "center",
		padding: "4px 10px",
		borderRadius: "18px",
		backgroundColor: color,
		color: Theme.color.text,
		cursor: "pointer",
		fontWeight: 500,
	});
};

export const contentTextareaStyle = css({
	width: "536px",
	height: "466px",
	borderRadius: "20px",
	border: `1px solid ${Theme.color.border}`,
	outline: "none",
	padding: "34px",
	fontWeight: 500,
	fontSize: "20px",
	overflowWrap: "break-word",
	wordBreak: "break-all",
	whiteSpace: "pre-wrap",
	resize: "none",
	fontFamily: "Pretendard",

	"&::placeholder": {
		color: Theme.color.disabled_text,
	},
});

export const uploadButtonStyle = css({
	all: "unset",
	display: "flex",
	backgroundColor: Theme.color.brand_primary,
	padding: "6px 12px",
	fontWeight: 600,
	color: Theme.color.white,
	borderRadius: "4px",
	cursor: "pointer",
	float: "right",
	marginTop: "50px",
});

export const imgBoxStyle = css({
	width: "536px",
	height: "466px",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",

	"& > img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: "20px",
	},
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
