import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const imgStyle = css({
	width: "148px",
	height: "148px",
	borderRadius: "10px",
	objectFit: "cover",
});

export const formLayoutStyle = css({
	flexDirection: "column",
	gap: "30px",
	borderRadius: "2px",
	border: `1px solid ${Theme.color.border}`,
	padding: "60px",
});
