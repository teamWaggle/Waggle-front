import type { ChangeEvent } from "react";

import SearchButtonIcon from "@/assets/svg/search-button.svg?react";

import { Flex } from "@/components/common";

import {
  searchStyle,
  searchInputStyle,
  searchButtonStyle,
} from "@/components/common/SearchInput/SearchInput.style";

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  width: string;
}

const SearchBar = ({ onChange, width }: SearchBarProps) => {
  return (
    <Flex styles={{ align: "center" }} css={searchStyle(width)}>
      <input
        css={searchInputStyle(width)}
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
      />
      <Flex tag="button" styles={{ align: "center", justify: "center" }} css={searchButtonStyle}>
        <SearchButtonIcon />
      </Flex>
    </Flex>
  );
};
export default SearchBar;
