import { css } from "@emotion/react";

export const layoutStyle = (url: string) => {
	return css({
		width: "100%",
		height: "100%",
		transition: "width 0.3s, height 0.3s",
		overflow: "hidden",
		cursor: "grab",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		"& > div": {
			backgroundImage: `url(${url})`,
			backgroundPosition: "center center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			overflow: "hidden",
		},
	});
};
