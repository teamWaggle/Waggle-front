import Flex from "@components/common/Flex/Flex";

import { imgStyle } from "./PostCard.style";

import SampleImg from "@assets/png/post-sample.png";

const PostCard = () => {
	return (
		<Flex styles={{ align: "center", width: "286px", height: "286px" }}>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />
		</Flex>
	);
};

export default PostCard;
