import { styled } from "styled-components";

const SearchDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 520px;
	height: 32px;
	outline: 2.5px solid #000;
	border-radius: 8px;
	margin-left: 100px;

	& > input {
		width: 100%;
		height: 100%;
		border: none;
		font-size: 14px;
		padding: 10px;
		&:focus {
			outline: none;
		}
	}

	& > img {
		width: 20px;
		margin-right: 10px;
		cursor: pointer;
	}
`;

export { SearchDiv };
