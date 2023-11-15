import { styled } from "styled-components";

const ContainerHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
`;

const LogoDiv = styled.div`
	& > a {
		font-size: 30px;
		font-weight: 600;
	}
`;

const Nav = styled.nav`
	& > ul {
		display: flex;
		gap: 20px;

		& > li {
			display: inline;

			& > a {
				font-size: 20px;
			}
		}
	}
`;

export { ContainerHeader, LogoDiv, Nav };
