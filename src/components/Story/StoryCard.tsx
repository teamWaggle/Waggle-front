import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import StoryDetail from "@/components/Story/StoryDetail/StoryDetail";

import useModal from "@/hooks/useModal";

import type { StoryListInfoType } from "@/types/story";

import { imgStyle, iconStyle } from "@/components/Story/Story.style";

const StoryCard = ({ boardId, thumbnail }: StoryListInfoType) => {
	const modal = useModal();

	const storyDetailOpen = () => {
		modal.openModal({
			key: `StoryDetail${boardId}`,
			component: () => <StoryDetail id={boardId} />,
		});
	};

	return (
		<Flex
			styles={{ align: "center", width: "252px", height: "252px", position: "relative" }}
			onClick={storyDetailOpen}
		>
			<img src={thumbnail} alt="profileImg" css={imgStyle} />
			<MediaIcon css={iconStyle} />
		</Flex>
	);
};

export default StoryCard;
