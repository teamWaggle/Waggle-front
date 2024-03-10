import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";
// import RecommendOffIcon from "@/assets/svg/ic-recommend-off.svg?react";
// import RecommendOnIcon from "@/assets/svg/ic-recommend-off.svg?react";

import { Flex, Box, Text, Divider, Carousel } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import type { SirenContentType } from "@/types/siren";

import {
	textStyle,
	subTextStyle,
	contentBoxStyle,
} from "@/components/Siren/Detail/Content/Content.style";

const Content = ({
	lostLocate,
	petBreed,
	petGender,
	lostDate,
	petAge,
	contact,
	mediaList,
	content,
}: SirenContentType) => {
	const sirenContentTitleData = [
		{
			title: "강아지 실종 장소",
			data: lostLocate,
		},
		{
			title: "강아지 견종",
			data: petBreed,
		},
		{
			title: "강아지 성별",
			data: petGender,
		},
		{
			title: "강아지 실종 날짜",
			data: lostDate,
		},
		{
			title: "강아지 추정 나이",
			data: petAge,
		},
		{
			title: "연락처",
			data: contact,
		},
	];

	return (
		<Flex styles={{ direction: "column", margin: "60px 0", gap: "60px" }}>
			<Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px" }}>
				{sirenContentTitleData.map((contentData) => (
					<Box styles={{ width: "333px" }} key={contentData.title}>
						<Text size="xLarge" css={textStyle}>
							{contentData.title}
						</Text>

						{contentData.title === "강아지 성별" ? (
							<>{contentData.data === "Male" ? <MaleIcon /> : <FeMaleIcon />}</>
						) : (
							<>
								<Text size="large" css={subTextStyle}>
									{contentData.data}
								</Text>
								<Divider />
							</>
						)}
					</Box>
				))}
			</Flex>

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
				{/* <Flex styles={{ align: "center", gap: "22px" }}>
					{recommendIt ? <RecommendOnIcon /> : <RecommendOffIcon />}
					<Heading
						size="xxLarge"
						css={getDefaultTextStyle(
							recommendIt ? Theme.color.brand_primary : Theme.color.border,
							500,
						)}
					>
						{recommendCount}
					</Heading>
				</Flex> */}
			</Flex>
		</Flex>
	);
};

export default Content;
