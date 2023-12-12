import styled from "styled-components";

export const LayoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 30px 20px;
	box-shadow: 0px 2px 7px 0px rgba(0, 40, 37, 0.1);
	border-radius: 20px;
	border: 2px solid #f90;

	& > h2 {
		color: #f90;
		font-family: "Montserrat";
		font-size: 27px;
		font-weight: 600;
		line-height: normal;
	}

	& > h3 {
		color: #1b1b1b;
		font-family: Pretendard;
		font-size: 18px;
		font-weight: 600;
		line-height: normal;
		margin: 20px 0 24px;
	}
`;

export const CardDiv = styled.div`
	border-radius: 10px;
	box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
	padding: 10px 18px;
	max-width: 272px;
	display: flex;
	align-items: center;
	gap: 16px;
	position: relative;

	& > img {
		width: 90px;
		height: 90px;
		border-radius: 16px;
	}

	& > p {
		color: #1b1b1b;
		font-family: Pretendard;
		font-size: 19px;
		font-weight: 700;
		line-height: normal;
	}
`;
