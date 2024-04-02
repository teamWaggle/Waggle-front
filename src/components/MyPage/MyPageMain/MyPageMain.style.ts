import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	flexDirection: "column",
	gap: "30px",
	marginTop: "80px",
	paddingLeft: "30px",
});

export const introductionTextStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 500,
	margin: "16px 0 30px",
});

export const petCardBoxStyle = css({
	marginTop: "30px",
	flexDirection: "column",
	gap: "20px",
});

export const petCardStyle = css({
	borderRadius: "16px",
	border: `1px solid ${Theme.color.border}`,
	width: "100%",

	"& > img": {
		width: "200px",
		height: "200px",
		objectFit: "cover",
		borderRadius: "16px 0 0 16px",
		borderRight: `1px solid ${Theme.color.border}`,
	},
});

export const petInfoBoxStyle = css({
	padding: "20px",
	flexDirection: "column",
	gap: "14px",

	"& > p": {
		color: Theme.color.readonly_text,
		fontWeight: 500,

		"& > span": {
			marginRight: "12px",
			position: "relative",

			"&:after": {
				position: "absolute",
				content: "''",
				width: "1px",
				height: "12px",
				top: "3px",
				right: "-6px",
				backgroundColor: Theme.color.readonly_text,
			},

			"&:last-of-type::after": {
				content: "none",
			},
		},
	},
});
