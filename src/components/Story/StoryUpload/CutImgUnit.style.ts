import { css } from "@emotion/react";

export const layoutStyle = (url: string, width: number, height: number) => {
	return css({
		width: `${width}px`,
		height: `${height}px`,
		transition: "width 0.3s, height 0.3s",
		overflow: "hidden",
		cursor: "grab",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: height === 730 ? "0 0 42px 42px" : "",

		"& > div": {
			backgroundImage: `url(${url})`,
			backgroundPosition: "center center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			overflow: "hidden",
		},
	});
};
