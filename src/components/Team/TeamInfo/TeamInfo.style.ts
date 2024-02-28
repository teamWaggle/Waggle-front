import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const teamSectionStyle = css({
	marginTop: "50px",
	alignItems: "center",
});

export const teamImgStyle = css({
	borderRadius: "20px",
	width: "195px",
	height: "195px",
	objectFit: "cover",
});

export const teamInfoBoxStyle = css({
	marginLeft: "20px",
});

export const teamInfoSubTitleStyle = css({
	marginTop: "10px",
	marginBottom: "10px",
	color: Theme.color.text,
});

export const teamInfoNewApplyStyle = css({
	marginTop: "10px",
	color: Theme.color.btn_danger,
});
