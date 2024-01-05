import SampleImg from "@assets/png/post-sample.png";

import { Flex } from "@components/common";
import { imgStyle } from "@components/Landing/Post/Post.style";

import useModal from "@/hooks/useModal";

import Detail from "./Detail/Detail";

const PostCard = () => {
	const modal = useModal();

	const open = () => {
		modal.openModal({ key: "postDetail", component: () => <Detail /> });
	};

	return (
		<Flex styles={{ align: "center", width: "252px", height: "252px" }} onClick={open}>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />
		</Flex>
	);
};

export default PostCard;
