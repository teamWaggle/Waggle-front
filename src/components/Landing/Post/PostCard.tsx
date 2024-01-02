import SampleImg from "@assets/png/post-sample.png";

import { Flex, Modal } from "@components/common";
import { imgStyle } from "@components/Landing/Post/Post.style";

import { useOverlay } from "@/hooks/useOverlay";

const PostCard = () => {
	const { isOpen, open, close } = useOverlay();

	console.log("test ");

	return (
		<Flex styles={{ align: "center", width: "252px", height: "252px" }} onClick={open}>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />

			<Modal isOpen={isOpen} closeModal={close}>
				sfasdf
			</Modal>
		</Flex>
	);
};

export default PostCard;
