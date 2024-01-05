import { css } from "@emotion/react";
import { Theme } from "@styles/Theme";

export const layoutStyle = css({
	width: "1060px",
	height: "736px",
	backgroundColor: Theme.color.white,
	borderRadius: "42px",
	border: `5px solid ${Theme.color.brand_primary}`,
	boxShadow: Theme.boxShadow.shadow1,
});
