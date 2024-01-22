import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const sectionStyle = css({
	height: "665px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: Theme.color.brand_primary,
});

export const textStyle = css({
	color: Theme.color.white,
	margin: "26px 69px",
	fontWeight: "700",
});
