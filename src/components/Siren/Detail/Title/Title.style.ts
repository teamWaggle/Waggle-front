import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const tagStyle = css({
	padding: "4px 10px",
	borderRadius: "17px",
	color: Theme.color.text,
	fontWeight: 500,
	backgroundColor: Theme.color.btn_02,
});

export const headingStyle = css({
	color: Theme.color.text,
	fontWeight: 700,
});

export const profileStyle = css({
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	objectFit: "cover",
});

export const textStyle = css({
	color: Theme.color.disabled_text,
	fontWeight: 500,
});
