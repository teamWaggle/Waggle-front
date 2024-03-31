import LogIcon from "@/assets/svg/log.svg?react";

import { Flex, Heading, Text, SearchInput } from "@/components/common";
import SortButton from "@/components/common/SortButton/SortButton";
import StoryUploadMediaModal from "@/components/Story/StoryUploadMediaModal/StoryUploadMediaModal";

import useModal from "@/hooks/useModal";

import {
	headingStyle,
	buttonStyle,
	sortButtonBoxStyle,
} from "@/components/Story/StorySearchBar/StorySearchBar.style";

const StorySearchBar = () => {
	const modal = useModal();

	const storyUploadOpen = () => {
		modal.openModal({
			key: `StoryUpload`,
			component: () => <StoryUploadMediaModal />,
			isWhiteIcon: true,
		});
	};

	return (
		<Flex styles={{ direction: "column", width: "100%" }}>
			<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
				<Flex styles={{ align: "center", gap: "20px" }}>
					<Heading size="large" css={headingStyle}>
						Waggle LOG
						<LogIcon />
					</Heading>

					<button type="button" css={buttonStyle} onClick={storyUploadOpen}>
						<Text size="xLarge">글 작성하기</Text>
					</button>
				</Flex>

				<SearchInput onChange={() => {}} width="252px" />
			</Flex>

			<Flex css={sortButtonBoxStyle}>
				<SortButton defaultText="인기순" />
			</Flex>
		</Flex>
	);
};

export default StorySearchBar;
