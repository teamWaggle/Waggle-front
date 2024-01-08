import { css } from "@emotion/react";
import { Theme } from "@styles/Theme";

export const imgStyle = css({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "4px",
});

export const headingStyle = css({
	color: Theme.color.brand_primary,
	fontFamily: "Montserrat",
	fontWeight: 600,
	fontSize: "30px",

	"& > svg": {
		marginLeft: "4px",
	},
});
