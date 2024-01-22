import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const flexStyle = css({
	alignItems: "center",
	margin: "0 auto",
	width: "1128px",
	justifyContent: "center",
});
export const boxStyle = css({
	margin: "0 auto",
	display: "grid",
	gridGap: "1px",
	gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
	gridAutoRows: "minmax(50px, 200px)",
	width: "1128px",
	height: "535px",
	overflow: "hidden",
	borderRadius: "16px",
	backgroundColor: Theme.color.border,
});
