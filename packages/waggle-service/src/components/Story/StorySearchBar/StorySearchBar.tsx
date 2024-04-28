import { useRecoilValue } from "recoil";

import { Flex, Heading, useOverlay, Button, SortButton } from "waggle-design-system";

import LogIcon from "@/assets/svg/log.svg?react";

import { SearchInput } from "@/components/common";

import StoryUploadMediaModal from "@/components/Story/StoryUploadMediaModal/StoryUploadMediaModal";

import { isLoggedInState } from "@/recoil/atoms/auth";

import {
  headingStyle,
  sortButtonBoxStyle,
} from "@/components/Story/StorySearchBar/StorySearchBar.style";

const StorySearchBar = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const {
    isOpen: isStoryUploadMediaModalOpen,
    close: closeStoryUploadMediaModal,
    open: openStoryUploadMediaModal,
  } = useOverlay();

  return (
    <Flex styles={{ direction: "column", width: "100%" }}>
      <Flex
        styles={{ align: "center", justify: "space-between", width: "100%", marginBottom: "40px" }}
      >
        <Flex styles={{ align: "center", gap: "20px" }}>
          <Heading size="large" css={headingStyle}>
            Waggle LOG
            <LogIcon />
          </Heading>

          {isLoggedIn && <Button onClick={openStoryUploadMediaModal}>글 작성하기</Button>}
        </Flex>

        <SearchInput onChange={() => {}} width="252px" />
      </Flex>

      <Flex css={sortButtonBoxStyle}>
        <SortButton defaultText="인기순" />
      </Flex>

      {isStoryUploadMediaModalOpen && (
        <StoryUploadMediaModal
          isOpen={isStoryUploadMediaModalOpen}
          onClose={closeStoryUploadMediaModal}
        />
      )}
    </Flex>
  );
};

export default StorySearchBar;
