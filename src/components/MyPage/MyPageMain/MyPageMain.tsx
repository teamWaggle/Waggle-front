import SampleImg from "@/assets/png/post-sample.png";
// import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Box, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	petCardBoxStyle,
	petCardStyle,
	petInfoBoxStyle,
} from "@/components/MyPage/MyPageMain/MyPageMain.style";

const MyPageMain = () => {
	return (
		<Box tag="main" css={layoutStyle}>
			<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
				반려견 소개
			</Heading>

			<Flex css={petCardBoxStyle}>
				<Flex css={petCardStyle}>
					<img src={SampleImg} alt="petImg" />

					<Flex css={petInfoBoxStyle}>
						<Flex styles={{ align: "center", gap: "6px" }}>
							<MaleIcon />
							<Heading size="xSmall">펫 이름</Heading>
						</Flex>
						<Text>
							<span>시고르자브종</span>
							<span>2살</span>
						</Text>
						<Text>반려견 소개가 입력되지 않았습니다.</Text>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};

export default MyPageMain;
