import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const uploadMediaBoxStyle = (isDragOver: boolean) =>
	css({
		width: "536px",
		height: "466px",
		backgroundColor: isDragOver ? "#ffeaca" : Theme.color.brand_primary,

		borderRadius: "20px",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: "20px",

		"& > p": {
			fontWeight: 600,
			color: isDragOver ? Theme.color.brand_primary : Theme.color.white,
		},

		"& > input": {
			display: "none",
		},

		"& > svg > path": {
			fill: isDragOver ? Theme.color.brand_primary : "",
		},

		"& > label": {
			all: "unset",
			borderRadius: "6px",
			backgroundColor: isDragOver ? Theme.color.brand_primary : Theme.color.white,
			padding: "8px",
			cursor: "pointer",

			"& > p": {
				fontWeight: 600,
				color: isDragOver ? Theme.color.white : Theme.color.brand_primary,
			},
		},
	});
