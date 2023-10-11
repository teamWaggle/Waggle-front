import { ContainerHeader, LogoDiv, Nav } from "./Header.styles";

import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
	return (
		<ContainerHeader>
			<LogoDiv>
				<a href="/">Waggle</a>
			</LogoDiv>
			<SearchBar />
			<Nav>
				<ul>
					<li>
						<a href="/qna">Q&A</a>
					</li>
					<li>
						<a href="/schedule">일정</a>
					</li>
					<li>
						<a href="/map">지도</a>
					</li>
					<li>
						<a href="/mypage">마이페이지</a>
					</li>
				</ul>
			</Nav>
		</ContainerHeader>
	);
};

export default Header;
