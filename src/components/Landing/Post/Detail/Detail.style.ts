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

export const imgStyle = css({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "36px 0 0 36px",
});

export const profileStyle = css({
	width: "33px",
	height: "33px",
	borderRadius: "50%",
	objectFit: "cover",
});

export const commentLayoutStyle = css({
	overflow: "auto",
	height: "430px",
});

export const contentBoxStyle = css({
	maxWidth: "270px",
});

export const commentBoxStyle = css({
	maxWidth: "215px",
});

export const getCommentTextStyle = (isReply: boolean) => {
	return css({
		color: Theme.color.text,
		fontWeight: 500,
		paddingLeft: isReply ? "0px" : "43px",
		margin: "-6px 0 2px",
		wordWrap: "break-word",
	});
};
