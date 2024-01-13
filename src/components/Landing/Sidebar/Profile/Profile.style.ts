import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const boxStyle = css({
	borderRadius: Theme.spacer.spacing5,
	border: `2px solid ${Theme.color.brand_primary}`,
	boxShadow: Theme.boxShadow.shadow3,
	width: "315px",
});

export const headingStyle = css({
	color: Theme.color.text,
	fontWeight: 700,
});

export const textStyle = css({
	color: Theme.color.text,
	fontWeight: 500,
});

export const logoutBoxStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
	fontFamily: "Montserrat",
	padding: "12px 36px",
	width: "100%",
});

export const buttonStyle = css({
	all: "unset",
	cursor: "pointer",
});
