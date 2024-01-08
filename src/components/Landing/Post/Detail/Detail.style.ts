import { css } from "@emotion/react";
import { Theme } from "@styles/Theme";

export const layoutStyle = css({
	width: "1060px",
	height: "736px",
	backgroundColor: Theme.color.white,
	borderRadius: "42px",
	border: `5px solid ${Theme.color.brand_primary}`,
	boxShadow: Theme.boxShadow.shadow1,
	position: "relative",
});

export const imgStyle = css({
	width: "100%",
	height: "100%",
	objectFit: "cover",
});

export const profileStyle = css({
	width: "48px",
	height: "48px",
	borderRadius: "50%",
	objectFit: "cover",
});

export const infoBoxStyle = css({
	maxWidth: "225px",
});

export const contentStyle = css({
	color: Theme.color.input_text,
	fontWeight: "500",
});
