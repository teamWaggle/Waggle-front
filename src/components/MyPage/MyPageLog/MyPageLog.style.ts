import { css } from "@emotion/react";

export const layoutStyle = css({
	flexDirection: "column",
	gap: "30px",
	marginTop: "80px",
	paddingLeft: "30px",
});

export const storyBoxStyle = css({
	alignItems: "center",
	flexWrap: "wrap",
	gap: "16px",
	width: "789px",
});

export const storyCardStyle = css({
	alignItems: "center",
	width: "252px",
	height: "252px",
	position: "relative",

	"& > img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: "4px",
	},

	"& > svg": {
		position: "absolute",
		top: "12px",
		right: "12px",
	},
});
