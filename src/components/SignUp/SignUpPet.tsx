import FeMaleIcon from "@/assets/svg/female.svg?react";
import MaleIcon from "@/assets/svg/Male.svg?react";
import PetProfileIcon from "@/assets/svg/PetProfileIcon.svg?react";
import { Flex, Box, Heading, Text } from "@/components/common";
import { Theme } from "@/styles/Theme";

import {
	headingStyle,
	textareaStyle,
	addCardButtonStyle,
} from "@/components/SignUp/SignUpPet.style";
import {
	textStyle,
	formTextStyle,
	buttonStyle,
	buttonTextStyle,
	getInputStyle,
	getNextButtonStyle,
} from "@/components/SignUp/SignUpProfile.style";

const SignUpPet = () => {
	return (
		<Flex styles={{ direction: "column", width: "554px", marginTop: "50px" }}>
			<Heading size="xSmall" css={headingStyle}>
				나의 첫 번째 반려견
			</Heading>

			<Flex
				styles={{
					direction: "column",
					gap: "30px",
					width: "554px",
					height: "698px",
					borderRadius: "2px",
					border: `1px solid ${Theme.color.border}`,
					padding: "60px",
					marginTop: "12px",
				}}
			>
				{/* 프로필 영역 */}
				<Flex styles={{ align: "center", gap: "60px" }}>
					<PetProfileIcon />
					<Flex styles={{ direction: "column", gap: "14px" }}>
						<Text css={textStyle}>프로필 이미지</Text>
						<Box tag="button" css={buttonStyle}>
							<Text css={buttonTextStyle}>컴퓨터에서 파일 선택</Text>
						</Box>
						<Text size="small" css={buttonTextStyle}>
							확장자: png, jpg, jpeg / 용량: 1MB 이하
						</Text>
					</Flex>
				</Flex>

				<Flex styles={{ direction: "column", gap: "4px" }}>
					<Text css={formTextStyle}>강아지 이름</Text>
					<input
						css={getInputStyle("444px")}
						placeholder="사랑스러운 반려견의 이름을 입력해주세요"
					/>
				</Flex>

				<Flex styles={{ align: "center", gap: "60px" }}>
					<Flex styles={{ direction: "column", gap: "4px" }}>
						<Text css={formTextStyle}>강아지 나이</Text>
						<input css={getInputStyle("214px")} placeholder="강아지 나이를 입력해주세요" />
					</Flex>

					<Flex styles={{ direction: "column", gap: "4px" }}>
						<Text css={textStyle}>강아지 성별</Text>
						<Flex styles={{ gap: "16px", height: "44px", align: "center" }}>
							<FeMaleIcon />
							<MaleIcon />
						</Flex>
					</Flex>
				</Flex>

				<Flex styles={{ direction: "column", gap: "4px" }}>
					<Text css={formTextStyle}>강아지 종</Text>
					<input css={getInputStyle("444px")} placeholder="강아지종을 입력해주세요" />
				</Flex>

				<Flex styles={{ direction: "column", gap: "4px" }}>
					<Text css={formTextStyle}>반려견 소개</Text>
					<textarea
						css={textareaStyle}
						placeholder="즐겨먹는 간식, 습관 등으로 반려견을 소개해주세요"
					/>
				</Flex>
			</Flex>

			<Box tag="button" css={addCardButtonStyle}>
				<Text size="large">반려견 카드 추가하기</Text>
			</Box>

			<Flex
				styles={{ align: "center", justify: "space-between", width: "100%", marginTop: "50px" }}
			>
				<Box tag="button" css={getNextButtonStyle("이전")}>
					<Text size="large">이전</Text>
				</Box>
				<Box tag="button" css={getNextButtonStyle("저장하기")}>
					<Text size="large">저장하기</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

export default SignUpPet;
