import { Flex } from "@components/common";
import { imgStyle } from "@components/Landing/Post/Post.style";

import useModal from "@/hooks/useModal";

import Detail from "./Detail/Detail";

import { StoryListInfoType } from "@/types/story";

const PostCard = ({ id, thumbnail }: StoryListInfoType) => {
	const modal = useModal();

	const open = () => {
		modal.openModal({
			key: `postDetail${id}`,
			component: () => <Detail id={id} />,
		});
	};

	return (
		<Flex styles={{ align: "center", width: "252px", height: "252px" }} onClick={open}>
			<img src={thumbnail} alt="profileImg" css={imgStyle} />
		</Flex>
	);
};

export default PostCard;
