import styled from "styled-components";

export const LayoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	height: 203px;
	border-radius: 20px;
	border: 2px solid #ff9900;
	box-shadow: 0px 2px 7px 0px rgba(0, 40, 37, 0.1);
	justify-content: center;
	align-items: center;
	padding: 0 16px;
	font-family: Pretendard;
	line-height: normal;

	& > h3 {
		color: #1b1b1b;
		font-size: 20px;
		font-weight: 700;
	}

	& > button {
		all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding: 15px 70px;
		border-radius: 8px;
		background-color: #f90;

		& > p {
			color: #fff;
			font-size: 16px;
			font-weight: 700;
			white-space: nowrap;
		}

		& > svg {
			width: 92px;

			& > g > path {
				fill: #fff;
			}
		}
	}

	& > h4 {
		color: #686868;
		font-size: 17px;
		font-weight: 700;
	}
`;
