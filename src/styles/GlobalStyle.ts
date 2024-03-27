import { css } from "@emotion/react";

export const GlobalStyle = css`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	ul,
	ol,
	li {
		list-style: none;
	}

	html,
	body {
		font-family: "Pretendard";
		font-size: 16px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@font-face {
		font-family: "Pretendard";
		src: url("/fonts/Pretendard.ttf");
	}

	@font-face {
		font-family: "Montserrat";
		src: url("/fonts/Montserrat.ttf");
	}
`;
