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

export const lineStyle = css({
	width: "100%",
	height: "1px",
	background: "#e6e6e6",
});

export const logoutTextStyle = css({
	color: Theme.color.text,
	fontWeight: 600,
	fontFamily: "Montserrat",
});
