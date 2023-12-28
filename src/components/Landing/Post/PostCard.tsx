import SampleImg from "@assets/png/post-sample.png";

import { Flex } from "@components/common";
import { imgStyle } from "@components/Landing/Post/Post.style";

const PostCard = () => {
	return (
		<Flex styles={{ align: "center", width: "252px", height: "252px" }}>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />
		</Flex>
	);
};

export default PostCard;
