import { useRecoilValue } from "recoil";

import { Flex, Heading, Button } from "waggle-design-system";

import LogIcon from "@/assets/svg/log.svg?react";

import SearchInput from "@/components/common/SearchInput/SearchInput";

import StoryUploadMediaModal from "@/components/Story/StoryUploadMediaModal/StoryUploadMediaModal";

import useModal from "@/hooks/common/useModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

import { headingStyle } from "@/components/Story/StorySearchBar/StorySearchBar.style";

interface StorySearchBarProps {
  keyword: string;
  handleChangeInput: (value: string) => void;
  handleSearchClick: () => void;
}

const StorySearchBar = ({ keyword, handleChangeInput, handleSearchClick }: StorySearchBarProps) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { openModal } = useModal();

  const handleStoryUploadOpen = () => {
    openModal({
      key: `StoryUpload`,
      component: () => <StoryUploadMediaModal />,
      isWhiteIcon: true,
    });
  };

  return (
    <Flex styles={{ direction: "column", width: "100%" }}>
      <Flex
        styles={{ align: "center", justify: "space-between", width: "100%", marginBottom: "20px" }}
      >
        <Flex styles={{ align: "center", gap: "20px" }}>
          <Heading size="large" css={headingStyle}>
            Waggle LOG
            <LogIcon />
          </Heading>

          {isLoggedIn && <Button onClick={handleStoryUploadOpen}>글 작성하기</Button>}
        </Flex>

        <SearchInput
          keyword={keyword}
          handleChangeInput={handleChangeInput}
          handleSearchClick={handleSearchClick}
          width="252px"
        />
      </Flex>
    </Flex>
  );
};

export default StorySearchBar;
