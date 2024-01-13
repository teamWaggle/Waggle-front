import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const cardStyle = css({
	backgroundColor: "#FEFEFE",
	filter: "drop-shadow(0px 2px 12px rgba(0, 40, 37, 0.10))",
	borderRadius: "20px",
});

export const imgStyle = css({
	width: "279px",
	height: "224px",
	objectFit: "cover",
	borderRadius: "20px 20px 0 0",
});

export const infoStyle = css({
	borderRadius: "0 0 20px 20px",
	padding: "16px",
	width: "100%",
});

export const titleStyle = css({
	color: Theme.color.brand_primary,
	fontWeight: 700,
});

export const subStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 600,
	marginTop: "6px",
});

export const textStyle = css({
	color: Theme.color.brand_primary,
	fontWeight: 600,
	marginLeft: "8px",
});

export const dateStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 500,
});
