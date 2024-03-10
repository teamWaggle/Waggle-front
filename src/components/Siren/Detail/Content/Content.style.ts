import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const textStyle = css({
	color: Theme.color.black,
	fontWeight: 500,
	margin: "20px 0",
});

export const subTextStyle = css({
	color: Theme.color.text,
	marginBottom: "4px",
});

export const imgStyle = css({
	width: "536px",
	height: "466px",
	borderRadius: "20px",
	objectFit: "cover",
});

export const contentBoxStyle = css({
	width: "536px",
	height: "466px",
	borderRadius: "17px",
	border: `1px solid ${Theme.color.border}`,
	padding: "34px 22px",
});
