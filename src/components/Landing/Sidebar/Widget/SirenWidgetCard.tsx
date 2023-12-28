import SampleImg from "@assets/png/post-sample.png";

import { Flex, Text } from "@components/common";
import {
	imgStyle,
	textStyle,
	subTextStyle,
	tagStyle,
} from "@components/Landing/Sidebar/Widget/Widget.style";

import { Theme } from "@styles/Theme";

const SirenWidgetCard = () => {
	return (
		<Flex
			styles={{
				align: "center",
				gap: "22px",
				padding: "6px 12px",
				borderRadius: "8px",
				boxShadow: Theme.boxShadow.shadow1,
				position: "relative",
				width: "266px",
			}}
		>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />
			<Flex styles={{ direction: "column", justify: "center", gap: "8px" }}>
				<Text css={textStyle}>강아지를 찾고 있습니다asdfasdfasddfasasdfasfdsasdfasdf</Text>
				<Text css={subTextStyle}>제주특별자치도 제주시</Text>
			</Flex>

			<Flex styles={{ align: "center", justify: "center" }} css={tagStyle}>
				<Text size="xSmall">강아지 찾아요</Text>
			</Flex>
		</Flex>
	);
};

export default SirenWidgetCard;
