import SampleImg from "@/assets/png/post-sample.png";
// import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Box, Divider, Heading, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import {
	layoutStyle,
	introductionTextStyle,
	petCardBoxStyle,
	petCardStyle,
	petInfoBoxStyle,
} from "@/components/MyPage/MyPageMain/MyPageMain.style";

const MyPageMain = () => {
	return (
		<Box tag="main" css={layoutStyle}>
			<Heading size="small" css={getDefaultTextStyle(Theme.color.text, 700)}>
				소개
			</Heading>
			<Text size="small" css={introductionTextStyle}>
				금방 생글생글 웃던 모습은 간 데 없고, 흠뻑 물에 젖어서 추위와 공포로 우르르 떨고 있었습니다.
				그러나, 게으름뱅이 장 드 밀랑은 너무 늦잠을 자다가 그만 맨 꼬리가 되었어요. 금방 생글생글
				웃던 모습은 간 데 없고, 흠뻑 물에 젖어서 추위와 공포로 우르르 떨고 있었습니다
			</Text>

			<Divider />

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
