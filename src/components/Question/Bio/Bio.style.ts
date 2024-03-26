import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const sectionStyle = css({
	width: "100%",
	backgroundColor: Theme.color.brand_primary,
});

export const boxStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
	padding: "50px 196px",
	justifyContent: "space-between",
});

export const titleBoxStyle = css({
	color: Theme.color.white,
	fontWeight: 700,
	flexDirection: "column",
	gap: "10px",
	width: "198px",
});

export const buttonStyle = css({
	border: "none",
	outline: "none",
	cursor: "pointer",
	color: Theme.color.brand_primary,
	borderRadius: "4px",
	backgroundColor: Theme.color.white,
	padding: "6px 8px",
	fontWeight: 600,
});
