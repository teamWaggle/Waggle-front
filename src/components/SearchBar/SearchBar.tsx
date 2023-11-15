import { SearchDiv } from "./SearchBar.styles";

const SearchBar = () => {
	return (
		<SearchDiv>
			<input type="text" placeholder="검색어를 입력해주세요" />
			<img
				src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
				alt="search_icon"
			/>
		</SearchDiv>
	);
};

export default SearchBar;
