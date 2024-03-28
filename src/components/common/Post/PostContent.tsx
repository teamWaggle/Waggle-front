import { css } from "@emotion/react";

import { Flex, Box, Text, Carousel } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

const PostContent = ({ mediaList, content }: { mediaList: string[]; content: string }) => {
	console.log(mediaList);

	if (!mediaList) {
		return <div>로딩중..</div>;
	}

	return (
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
	);
};

export default PostContent;

export const contentBoxStyle = css({
	width: "536px",
	height: "466px",
	borderRadius: "20px",
	border: `1px solid ${Theme.color.border}`,
	padding: "34px 22px",
});
