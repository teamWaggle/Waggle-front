import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const titleBoxStyle = css({
	flexDirection: "column",
	gap: "12px",
	marginBottom: "18px",
	position: "relative",
	width: "100%",
});

export const tagStyle = (isResolve: boolean) => {
	return css({
		justifyContent: "center",
		alignItems: "center",
		padding: "4px 10px",
		borderRadius: "18px",
		backgroundColor: isResolve ? Theme.color.btn_success : Theme.color.btn_danger,
		color: Theme.color.text,
		cursor: "pointer",
		fontWeight: 500,
	});
};

export const keywordBoxStyle = css({
	gap: "18px",
	color: Theme.color.black,
	fontWeight: 600,
});

export const profileStyle = css({
	alignItems: "center",
	color: Theme.color.disabled_text,
	fontWeight: 500,

	"& > img": {
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		objectFit: "cover",
	},

	span: {
		marginLeft: "14px",
	},
});
