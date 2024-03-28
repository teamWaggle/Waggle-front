import RecommendOffIcon from "@/assets/svg/ic-recommend-off.svg?react";
import RecommendOnIcon from "@/assets/svg/ic-recommend-on.svg?react";

import { Flex, Box, Text, Heading, Carousel } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { QuestionContentType } from "@/types/question";

import { contentBoxStyle } from "@/components/Question/QuestionDetail/QuestionContent.style";

const QuestionContent = ({ content, mediaList, recommendationInfo }: QuestionContentType) => {
	return (
		<Flex styles={{ direction: "column", margin: "60px 0", gap: "60px" }}>
			<Flex styles={{ align: "center", gap: "64px" }}>
				<Carousel
					width={536}
					height={466}
					borderRadius="20px"
					showArrows={mediaList.length > 1}
					showDots={mediaList.length > 1}
					length={mediaList.length}
				>
					{mediaList.map((imgUrl, index) => (
						<Carousel.Item index={index} key={imgUrl}>
							<img src={imgUrl} alt="img" />
						</Carousel.Item>
					))}
				</Carousel>

				<Box css={contentBoxStyle}>
					<Text size="xLarge" css={getDefaultTextStyle(Theme.color.text, 500)}>
						{content}
					</Text>
				</Box>
			</Flex>

			<Flex styles={{ align: "center", justify: "center", width: "100%" }}>
				<Flex styles={{ align: "center", gap: "22px" }}>
					{recommendationInfo.isRecommend ? <RecommendOnIcon /> : <RecommendOffIcon />}

					<Heading
						size="xxLarge"
						css={getDefaultTextStyle(
							recommendationInfo.isRecommend ? Theme.color.brand_primary : Theme.color.border,
							500,
						)}
					>
						{recommendationInfo.recommendCount}
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default QuestionContent;
