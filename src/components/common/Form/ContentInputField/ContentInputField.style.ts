import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const contentTextareaStyle = (isError: boolean) =>
	css({
		width: "100%",
		height: "100%",
		padding: "0 12px",
		marginTop: "20px",
		color: Theme.color.input_text,
		fontSize: "16px",
		outline: "none",
		borderRadius: "6px",
		border: `2px solid ${isError ? Theme.color.btn_danger : Theme.color.gray200}`,
		resize: "none",
	});
