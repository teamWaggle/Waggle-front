import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const participationCardNameStyle = css({
	height: "32px",
	width: "160px",
	minWidth: "fit-content",
	borderRadius: "4px",
	border: `1px solid ${Theme.color.btn_danger}`,
	alignItems: "center",
	justifyContent: "space-between",
});
export const participationCardImgStyle = css({
	height: "18px",
	width: "18px",
	marginLeft: "8px",
	borderRadius: "50%",
	marginRight: "6px",
});

export const participationCardTextStyle = css({
	marginRight: "16px",
});
