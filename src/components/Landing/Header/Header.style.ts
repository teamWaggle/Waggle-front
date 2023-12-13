import { Theme } from "@/styles/Theme";
import { css } from "@emotion/react";

export const headerStyle = css({
	position: "sticky",
	top: 0,
	zIndex: 1,
	backgroundColor: Theme.color.white,
	borderBottom: `1px solid ${Theme.color.readonly_text}`,
});

export const innerStyle = css({
	maxWidth: "1536px",
	margin: "0 auto",
});

export const logoStyle = css({
	cursor: "pointer",
});

export const textStyle = css({
	color: Theme.color.black,
	fontFamily: "Montserrat",
	fontSize: "22px",
	fontStyle: "normal",
	fontWeight: 700,
	lineHeight: "normal",
	letterSpacing: "-0.44px",
});
