import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import PostDetail from "@/components/Landing/Post/PostDetail/PostDetail";

import useModal from "@/hooks/useModal";

import type { StoryListInfoType } from "@/types/story";

import { imgStyle, iconStyle } from "@/components/Landing/Post/Post.style";

const PostCard = ({ id, thumbnail }: StoryListInfoType) => {
	const modal = useModal();

	const postDetailOpen = () => {
		modal.openModal({
			key: `postDetail${id}`,
			component: () => <PostDetail id={id} />,
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
