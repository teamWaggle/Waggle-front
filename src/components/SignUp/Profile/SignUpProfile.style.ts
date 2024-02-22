import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const imgStyle = css({
	width: "148px",
	height: "148px",
	borderRadius: "50%",
	objectFit: "cover",
});

export const getNicknameTextStyle = (isComplete: boolean) => {
	return css({
		color: isComplete ? Theme.color.brand_primary : Theme.color.btn_danger,
		fontWeight: 500,
	});
};

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
			height: "148px",
			overflowY: "auto",
			display: open ? "block" : "none",
			position: "absolute",
			backgroundColor: Theme.color.white,
			marginLeft: "-1px",
			msOverflowStyle: "none",
			scrollbarWidth: "none",
			border: `1px solid ${Theme.color.border}`,

			"&::-webkit-scrollbar": {
				display: "none",
			},

			"& > li": {
				padding: "10px 18px",
				borderBottom: `1px solid ${Theme.color.border}`,
				color: Theme.color.black,
				cursor: "pointer",

				"&:hover": {
					backgroundColor: "#ececec",
				},

				"&:last-of-type": {
					borderBottom: "none",
				},
			},
		},
	});
};
