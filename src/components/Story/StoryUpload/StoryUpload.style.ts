import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	width: "740px",
	height: "740px",
	backgroundColor: Theme.color.brand_primary,
	borderRadius: "42px",
	border: `5px solid ${Theme.color.white}`,
	boxShadow: Theme.boxShadow.shadow1,
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	gap: "20px",

	"& > input": {
		display: "none",
	},
});

export const labelStyle = css({
	all: "unset",
	borderRadius: "6px",
	backgroundColor: Theme.color.white,
	padding: "8px",
	cursor: "pointer",
});
