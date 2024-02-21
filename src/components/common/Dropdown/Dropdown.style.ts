import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const dropdownListStyle = css({
	position: "absolute",
	border: `1px solid ${Theme.color.border}`,
	backgroundColor: Theme.color.white,
	borderRadius: "4px",
});

export const dropdownItemStyle = css({
	padding: "8px 10px",
	borderBottom: `1px solid ${Theme.color.border}`,
	cursor: "pointer",

	"&:hover": {
		backgroundColor: Theme.color.border,
	},
	"&:last-child": {
		borderBottom: "none",
	},
});
