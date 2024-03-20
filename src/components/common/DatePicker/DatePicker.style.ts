import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const datePickerBoxStyle = css({
	borderRadius: "2px",
	border: `1px solid ${Theme.color.border}`,
	color: Theme.color.readonly_text,
	padding: "4px 6px",
	alignItems: "center",
	gap: "4px",
});
