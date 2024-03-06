import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	width: "1060px",
	height: "736px",
	backgroundColor: Theme.color.white,
	borderRadius: "42px",
	border: `5px solid ${Theme.color.brand_primary}`,
	boxShadow: Theme.boxShadow.shadow1,
	position: "relative",
});

export const sliderBoxStyle = css({
	width: "741px",
	height: "100%",
	borderRight: "1px solid #d2d2d2",
});

export const contentBoxStyle = css({
	flexDirection: "column",
	padding: "52px 30px 12px 18px",
	gap: "12px",
	width: "100%",
});

export const commentLayoutStyle = css({
	width: "100%",
	overflow: "auto",
	height: "450px",
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	padding: "20px 0",
});
