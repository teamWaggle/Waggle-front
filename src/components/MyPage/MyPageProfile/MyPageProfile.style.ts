import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	padding: "80px 30px 0 0",
	borderRight: `1px solid ${Theme.color.border}`,
	height: "100vh",
});

export const profileInfoBoxStyle = css({
	gap: "20px",
	alignItems: "center",

	"& > img": {
		width: "72px",
		height: "72px",
		borderRadius: "50%",
		objectFit: "cover",
	},

	p: {
		marginTop: "8px",
	},

	span: {
		"&:first-of-type": {
			marginRight: "30px",
		},
	},
});

export const followButtonStyle = (isFollow: boolean) =>
	css({
		width: "294px",
		height: "39px",
		backgroundColor: isFollow ? Theme.color.brand_primary : Theme.color.disabled_text,
		textAlign: "center",
		border: "none",
		outline: "none",
		color: Theme.color.white,
		fontWeight: 600,
		borderRadius: "4px",
		margin: "24px 0",
	});

export const menuBoxStyle = css({
	marginTop: "24px",
	flexDirection: "column",
	gap: "12px",
});

export const menuItemStyle = (isActive: boolean) =>
	css({
		gap: "20px",
		alignItems: "center",

		"& > div": {
			width: "4px",
			height: "4px",
			borderRadius: "50%",
			backgroundColor: isActive ? Theme.color.brand_primary : Theme.color.disabled_text,
		},

		"& > p": {
			fontWeight: 600,
			color: isActive ? Theme.color.brand_primary : Theme.color.disabled_text,
		},
	});
