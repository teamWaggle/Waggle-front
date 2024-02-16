import { Flex } from "@/components/common";
import Detail from "@/components/Landing/Post/Detail/Detail";
import { StoryListInfoType } from "@/types/story";

import useModal from "@/hooks/useModal";

import { imgStyle } from "@/components/Landing/Post/Post.style";

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
