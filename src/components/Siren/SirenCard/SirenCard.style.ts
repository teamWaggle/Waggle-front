import { Theme } from "@/styles/themetest";
import { css } from "@emotion/react";

export const cardStyle = css({
	backgroundColor: "#FEFEFE",
	filter: "drop-shadow(0px 2px 12px rgba(0, 40, 37, 0.10))",
	borderRadius: "20px",
});

export const imgStyle = css({
	width: "294px",
	height: "250px",
	objectFit: "cover",
	borderRadius: "20px 20px 0 0",
});

export const infoStyle = css({
	borderRadius: "0 0 20px 20px",
	fontFamily: "Pretendard",
	lineHeight: "normal",
	padding: "16px",
	width: "100%",
});

export const titleStyle = css({
	color: Theme.color.brand_primary,
	fontSize: "23px",
	fontWeight: 800,
});

export const subStyle = css({
	color: Theme.color.readonly_text,
	fontSize: "15px",
	fontWeight: 600,
	marginTop: "6px",
});

export const textStyle = css({
	color: Theme.color.brand_primary,
	fontWeight: 600,
	marginLeft: "5px",
});

export const dateStyle = css({
	color: Theme.color.readonly_text,
	fontWeight: 500,
});
