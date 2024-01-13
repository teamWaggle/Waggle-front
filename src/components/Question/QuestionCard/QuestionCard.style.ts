import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const cardStyle = css({
	backgroundColor: "#FEFEFE",
	filter: "drop-shadow(0px 1px 13px rgba(0, 40, 37, 0.13))",
	borderRadius: "12px",
	padding: "25px 36px",
	position: "relative",
	fontFamily: "Pretendard",
	lineHeight: "normal",
	maxWidth: "876px",
});

export const resolveStyle = css({
	backgroundColor: Theme.color.btn_success,
	color: Theme.color.text,
	padding: "8px 12px",
	borderRadius: "12px",
});

export const titleStyle = css({
	color: Theme.color.black,
	fontSize: "25px",
	fontWeight: 700,
});

export const tagStyle = css({
	color: Theme.color.readonly_text,
	fontSize: "17px",
	fontWeight: 500,
});

export const contentStyle = css({
	color: Theme.color.text,
	fontSize: "17px",
	fontWeight: 500,
});

export const iconStyle = css({
	position: "absolute",
	top: "25px",
	right: "36px",
});

export const iconTextStyle = css({
	color: Theme.color.brand_primary,
	fontSize: "20px",
	fontWeight: 700,
});
