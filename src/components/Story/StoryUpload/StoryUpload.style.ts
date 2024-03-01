import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = (isDragOver: boolean) => {
	return css({
		width: "740px",
		height: "740px",
		backgroundColor: isDragOver ? Theme.color.divider_gray : Theme.color.brand_primary,
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

		"& > svg > path": {
			fill: isDragOver ? "red" : "",
		},
	});
};

export const labelStyle = css({
	all: "unset",
	borderRadius: "6px",
	backgroundColor: Theme.color.white,
	padding: "8px",
	cursor: "pointer",
});
