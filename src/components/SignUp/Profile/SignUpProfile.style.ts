import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const imgStyle = css({
	width: "148px",
	height: "148px",
	borderRadius: "50%",
	objectFit: "cover",
});

export const inputStyle = css({
	display: "none",
});

export const buttonStyle = css({
	all: "unset",
	padding: "8px 14px",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.border}`,
	cursor: "pointer",
});

export const addressInputStyle = css({
	all: "unset",
	boxSizing: "border-box",
	width: "220px",
	borderBottom: `1px solid ${Theme.color.border}`,
	color: Theme.color.input_text,
	fontWeight: 500,
	fontSize: "16px",

	"&::placeholder": {
		color: Theme.color.disabled_text,
	},
});

export const getSelectBoxStyle = (open: boolean, isSelected: boolean) => {
	return css({
		borderRadius: open ? "4px 4px 0 0" : "4px",
		// borderRadius: "4px",
		border: `1px solid ${Theme.color.border}`,
		backgroundColor: Theme.color.white,
		position: "relative",
		color: isSelected ? Theme.color.text : Theme.color.border,
		fontWeight: 500,
		width: "102px",
		cursor: "pointer",

		"& > p": {
			padding: "10px 18px",
		},

		"& > svg": {
			position: "absolute",
			top: "18px",
			right: "20px",
		},

		"& > ul": {
			width: "102px",
			maxHeight: "132px",
			overflowY: "auto",
			display: open ? "block" : "none",
			position: "absolute",
			backgroundColor: Theme.color.white,
			marginLeft: "-1px",
			msOverflowStyle: "none",
			scrollbarWidth: "none",

			"&::-webkit-scrollbar": {
				display: "none",
			},

			"& > li": {
				padding: "10px 18px",
				border: `1px solid ${Theme.color.border}`,
				borderBottom: "none",
				color: Theme.color.black,
				cursor: "pointer",

				"&:hover": {
					backgroundColor: "#ececec",
				},

				"&:last-of-type": {
					borderBottom: `1px solid ${Theme.color.border}`,
				},
			},
		},
	});
};
