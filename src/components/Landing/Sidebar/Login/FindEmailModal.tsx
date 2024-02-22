import SelectArrowIcon from "@/assets/svg/ic-select-arrow.svg?react";

import { Flex, Box, Heading, Text, Logo } from "@/components/common";

import type { modalCloseType } from "@/types/modal";

import {
	layoutStyle,
	headingStyle,
	textStyle,
	formTextStyle,
	inputStyle,
	selectBoxStyle,
} from "@/components/Landing/Sidebar/Login/FindEmailModal.style";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FindEmailModal = ({ modalClose }: modalCloseType) => {
	return (
		<Flex
			styles={{
				direction: "column",
				gap: "60px",
			}}
			css={layoutStyle}
		>
			{/* 상단 텍스트 영역 */}
			<Flex
				styles={{
					direction: "column",
					align: "center",
					gap: "14px",
				}}
			>
				<Logo width={138} height={30} />
				<Heading size="xSmall" css={headingStyle}>
					아이디(이메일) 찾기
				</Heading>
				<Text css={textStyle}>
					계정에 등록된 이름과 생년월일이 일치하는 경우
					<br />
					사용중인 계정의 아이디를 알려드립니다.
				</Text>
			</Flex>

			{/* 폼 영역 */}
			<Flex styles={{ direction: "column", gap: "8px" }}>
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={formTextStyle}>이름</Text>
					<input css={inputStyle} placeholder="이름을 입력해주세요" />
				</Flex>
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={formTextStyle}>생년월일</Text>
					<Flex styles={{ gap: "13px" }}>
						<Box css={selectBoxStyle}>
							<Text>생년</Text>
							<ul>
								<li></li>
							</ul>
							<SelectArrowIcon />
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default FindEmailModal;
