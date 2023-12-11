import Flex from "@components/common/Flex/Flex";

import { Img } from "./PostCard.style";

import SampleImg from "@assets/png/post-sample.png";

const PostCard = () => {
	return (
		<Flex styles={{ align: "center", width: "286px", height: "286px" }}>
			<Img src={SampleImg} alt="sampleImg" />
		</Flex>
	);
};

export default PostCard;
