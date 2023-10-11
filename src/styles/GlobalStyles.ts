import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
	html {
		box-sizing: border-box;
		max-width: 1440px;
		margin: 0 auto;
	}
	*,
	:after,
	:before {
		box-sizing: inherit;
	}
	body,
	button,
	dd,
	dl,
	dt,
	fieldset,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	input,
	legend,
	li,
	ol,
	p,
	select,
	table,
	td,
	textarea,
	th,
	ul,
	figure,
	figcaption {
		margin: 0;
		padding: 0;
	}

	body,
	button,
	input,
	select,
	table,
	textarea {
		font-family:
			Pretendard,
			-apple-system,
			BlinkMacSystemFont,
			system-ui,
			Roboto,
			Helvetica Neue,
			Segoe UI,
			Apple SD Gothic Neo,
			Noto Sans KR,
			Malgun Gothic,
			sans-serif;
	}

	a,
	a:hover,
	a:focus {
		color: inherit;
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
		font-weight: 400;
	}

	ul {
		list-style: none;
	}

	button {
		all: unset;
	}
`}
`;

export default GlobalStyles;
