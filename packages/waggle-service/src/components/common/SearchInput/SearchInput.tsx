import { Flex } from "waggle-design-system";

import SearchButtonIcon from "@/assets/svg/ic-search-button.svg?react";

import {
  searchButtonStyle,
  searchInputStyle,
  searchStyle,
} from "@/components/common/SearchInput/SearchInput.style";

interface SearchInputProps {
  keyword: string;
  handleChangeInput: (value: string) => void;
  handleSearchClick: () => void;
  width: string;
}

const SearchInput = ({
  keyword,
  handleChangeInput,
  width,
  handleSearchClick,
}: SearchInputProps) => {
  return (
    <Flex styles={{ align: "center", position: "relative" }} css={searchStyle(width)}>
      <input
        css={searchInputStyle(width)}
        type="text"
        value={keyword}
        placeholder="검색어를 입력해주세요."
        onChange={(e) => handleChangeInput(e.target.value)}
      />
      <Flex
        tag="button"
        styles={{ align: "center", justify: "center" }}
        css={searchButtonStyle}
        onClick={handleSearchClick}
      >
        <SearchButtonIcon />
      </Flex>
    </Flex>
  );
};
export default SearchInput;
