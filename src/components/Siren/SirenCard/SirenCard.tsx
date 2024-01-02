import { Flex, Heading, Text } from "@components/common";
import {
	cardStyle,
	dateStyle,
	imgStyle,
	infoStyle,
	subStyle,
	textStyle,
	titleStyle,
} from "./SirenCard.style";

import SampleImg from "@assets/png/post-sample.png";

import SirenOnIcon from "@assets/svg/siren-on.svg?react";

const SirenCard = () => {
	return (
		<Flex styles={{ direction: "column" }} css={cardStyle}>
			<img src={SampleImg} alt="sampleImg" css={imgStyle} />
			<Flex styles={{ direction: "column" }} css={infoStyle}>
				<Heading size="xSmall" css={titleStyle}>
					강아지 찾아요 도와주세요
				</Heading>
				<Text css={subStyle}>경기도 의정부시 행복로 66</Text>
				<Flex
					styles={{
						justify: "space-between",
						align: "flex-end",
						marginTop: "36px",
						width: "100%",
					}}
				>
					<Flex styles={{ align: "flex-end" }}>
						<SirenOnIcon />
						<Text size="xSmall" css={textStyle}>
							100
						</Text>
					</Flex>
					<Text size="xSmall" css={dateStyle}>
						2023.10.12
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default SirenCard;
