import { useState } from "react";

import { Flex } from "waggle-design-system";

import SearchButtonIcon from "@/assets/svg/ic-search-button.svg?react";

import {
  searchButtonStyle,
  searchInputStyle,
  searchStyle,
} from "@/components/common/SearchInput/SearchInput.style";

interface SearchInputProps {
  handleSearch: () => void;
  width: string;
}

const SearchInput = ({ handleSearch, width }: SearchInputProps) => {
  const [keyword, setKeyword] = useState("");

  return (
    <Flex styles={{ align: "center", position: "relative" }} css={searchStyle(width)}>
      <input
        css={searchInputStyle(width)}
        type="text"
        value={keyword}
        placeholder="검색어를 입력해주세요."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Flex
        tag="button"
        styles={{ align: "center", justify: "center" }}
        css={searchButtonStyle}
        onClick={handleSearch}
      >
        <SearchButtonIcon />
      </Flex>
    </Flex>
  );
};
export default SearchInput;
