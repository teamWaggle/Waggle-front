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
	width: "100%",
	height: "100%",
	borderRadius: "20px",
	objectFit: "cover",
});
