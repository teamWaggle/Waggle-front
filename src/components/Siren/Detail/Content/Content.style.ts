import { css } from "@emotion/react";
import { Theme } from "@styles/Theme";

export const textStyle = css({
	color: Theme.color.black,
	fontWeight: 500,
	margin: "20px 0",
});

export const subTextStyle = css({
	color: Theme.color.text,
	marginBottom: "4px",
});

export const imgStyle = css({
	width: "100%",
	height: "100%",
	borderRadius: "20px",
	objectFit: "cover",
});

export const contentTextStyle = css({
	color: Theme.color.text,
	fontWeight: 500,
});

export const getHeadingStyling = (recommendIt: boolean | undefined) => {
	return css({
		fontFamily: "Montserrat",
		fontWeight: 500,

		color: recommendIt ? Theme.color.brand_primary : Theme.color.border,
	});
};
