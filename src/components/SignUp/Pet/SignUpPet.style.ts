import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const addCardButtonStyle = css({
	all: "unset",
	boxSizing: "border-box",
	width: "554px",
	height: "44px",
	textAlign: "center",
	borderRadius: "2px",
	backgroundColor: Theme.color.brand_primary,
	color: Theme.color.white,
	fontWeight: 600,
});
