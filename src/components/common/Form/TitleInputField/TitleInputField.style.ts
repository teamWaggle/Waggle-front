import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";
export const titleTextInputStyle = (isError: boolean) =>
	css({
		width: "100%",
		height: "40px",
		padding: "12px",
		marginTop: "20px",
		color: Theme.color.input_text,
		border: "none",
		fontSize: "24px",
		outline: "none",
		borderBottom: `2px solid ${isError ? Theme.color.btn_danger : Theme.color.gray200}`,
		resize: "none",
	});
