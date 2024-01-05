import SampleImg from "@assets/png/post-sample.png";

import { Flex } from "@components/common";
import { imgStyle } from "@components/Landing/Post/Post.style";

import useRecoilModal from "@/hooks/useRecoilModal";

const PostCard = () => {
	const modal = useRecoilModal();

	const open = () => {
		modal.openModal({
			component: () => <Flex>fasdfsadfsa</Flex>,
		});
	};
	return (
		<Flex styles={{ align: "center", width: "252px", height: "252px" }} onClick={open}>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />
		</Flex>
	);
};

export default PostCard;
