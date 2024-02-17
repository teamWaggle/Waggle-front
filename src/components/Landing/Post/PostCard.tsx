import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import Detail from "@/components/Landing/Post/Detail/Detail";
import { StoryListInfoType } from "@/types/story";

import useModal from "@/hooks/useModal";

import { imgStyle, iconStyle } from "@/components/Landing/Post/Post.style";

const PostCard = ({ id, thumbnail }: StoryListInfoType) => {
	const modal = useModal();

	const postDetailOpen = () => {
		modal.openModal({
			key: `postDetail${id}`,
			component: () => <Detail id={id} />,
		});
	};

	return (
		<Flex
			styles={{ align: "center", width: "252px", height: "252px", position: "relative" }}
			onClick={postDetailOpen}
		>
			<img src={thumbnail} alt="profileImg" css={imgStyle} />
			<MediaIcon css={iconStyle} />
		</Flex>
	);
};

export default PostCard;
