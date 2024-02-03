import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";
import RecommendOffIcon from "@/assets/svg/recommendOff.svg?react";
import RecommendOnIcon from "@/assets/svg/recommendOn.svg?react";
import { Flex, Box, Text, Heading, Divider } from "@/components/common";
import { SirenResultType } from "@/types/siren";

import {
	textStyle,
	subTextStyle,
	imgStyle,
	contentTextStyle,
	getHeadingStyling,
} from "@/components/Siren/Detail/Content/Content.style";

const Content = ({
	lostLocate,
	petKind,
	petGender,
	lostDate,
	petAge,
	contact,
	medias,
	content,
	recommendIt,
	recommendCount,
}: SirenResultType) => {
	const data = [
		{
			title: "강아지 실종 장소",
			data: lostLocate,
		},
		{
			title: "강아지 견종",
			data: petKind,
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
			title: "강아지 연락처",
			data: contact,
		},
	];

	return (
		<Flex styles={{ direction: "column", margin: "60px 0", gap: "60px" }}>
			<Flex styles={{ align: "center", wrap: "wrap", gap: "58px 72px" }}>
				{data.map((data) => (
					<Flex styles={{ direction: "column", width: "333px" }} key={data.title}>
						<Text size="xLarge" css={textStyle}>
							{data.title}
						</Text>

						{data.title === "강아지 성별" ? (
							<>{data.data === "Male" ? <MaleIcon /> : <FeMaleIcon />}</>
						) : (
							<>
								<Text size="large" css={subTextStyle}>
									{data.data}
								</Text>
								<Divider />
							</>
						)}
					</Flex>
				))}
			</Flex>

			<Flex styles={{ align: "center", justify: "space-between", width: "100%" }}>
				<Box styles={{ width: "536px", height: "466px" }}>
					<img css={imgStyle} src={medias && medias[0]} alt="contentImg" />
				</Box>
				<Box
					styles={{
						width: "536px",
						height: "466px",
						borderRadius: "17px",
						border: "1px solid #d2d2d2",
						padding: "34px 22px",
					}}
				>
					<Text size="xLarge" css={contentTextStyle}>
						{content}
					</Text>
				</Box>
			</Flex>

			<Flex styles={{ align: "center", justify: "center", width: "100%" }}>
				<Flex styles={{ align: "center", gap: "22px" }}>
					{recommendIt ? <RecommendOnIcon /> : <RecommendOffIcon />}
					<Heading size="xxLarge" css={getHeadingStyling(recommendIt)}>
						{recommendCount}
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Content;
