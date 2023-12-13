import { css } from "@emotion/react";
import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
	boxShadow: "0px 2px 7px 0px rgba(0, 40, 37, 0.1)",
	borderRadius: "20px",
	border: `2px solid ${Theme.color.brand_primary}`,
});

export const titleStyle = css({
	color: Theme.color.brand_primary,
	fontFamily: "Montserrat",
	fontSize: "27px",
	fontWeight: 600,
	lineHeight: "normal",
});

export const subStyle = css({
	color: Theme.color.text,
	fontFamily: "Pretendard",
	fontSize: "18px",
	fontWeight: 600,
	lineHeight: "normal",
	margin: "20px 0 24px",
});

export const cardStyle = css({
	borderRadius: "10px",
	boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
	maxWidth: "272px",
	position: "relative",
});

export const imgStyle = css({
	width: "90px",
	height: "90px",
	borderRadius: "16px",
});

export const textStyle = css({
	color: Theme.color.text,
	fontFamily: "Pretendard",
	fontSize: "19px",
	fontWeight: 700,
	lineHeight: "normal",
});
