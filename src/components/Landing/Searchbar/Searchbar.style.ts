import styled from "styled-components";

export const LayoutDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

export const FilterDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	& > p {
		color: #1b1b1b;
		font-family: Pretendard;
		font-size: 20px;
		font-weight: 600;
		line-height: normal;
		white-space: nowrap;
	}
`;

export const SearchDiv = styled.div`
	position: relative;
	display: flex;
	padding: 0 8px;
	border-radius: 27.5px;
	border: 2px solid #ff9900;
	width: 100%;
	height: 55px;
	box-shadow: 0px 2px 5px 0px rgba(0, 40, 37, 0.1);

	& > input {
		width: 700px;
		border: none;
		outline: none;
		background: transparent;
	}

	& > button {
		all: unset;
		position: absolute;
		top: 14px;
		right: 14px;
		cursor: pointer;
	}
`;
