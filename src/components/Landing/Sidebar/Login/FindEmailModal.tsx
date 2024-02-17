import { useState } from "react";

import SelectArrowIcon from "@/assets/svg/ic-select-arrow.svg?react";

import { Flex, Box, Heading, Text, Logo } from "@/components/common";

import { yearData } from "@/constants/auth";

import type { modalCloseType } from "@/types/modal";

import {
	layoutStyle,
	headingStyle,
	textStyle,
	formTextStyle,
	inputStyle,
	getSelectBoxStyle,
} from "@/components/Landing/Sidebar/Login/FindEmailModal.style";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FindEmailModal = ({ modalClose }: modalCloseType) => {
	const [openYearOption, setOpenYearOption] = useState(false);
	const [yearOptionText, setYearOptionText] = useState("생년");
	const [isSelectText, setIsSelectText] = useState(false);

	const handleYearOptionText = (e: React.MouseEvent<HTMLLIElement>) => {
		const innerText = e.currentTarget.innerText;

		setYearOptionText(innerText);
		setOpenYearOption(false);
		setIsSelectText(true);
	};

	return (
		<Flex
			styles={{
				direction: "column",
				align: "center",
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
						<Box css={getSelectBoxStyle(openYearOption, isSelectText)}>
							<Text onClick={() => setOpenYearOption((prev) => !prev)}>{yearOptionText}</Text>
							<ul>
								{yearData.map((data) => (
									<li key={data.year} onClick={handleYearOptionText}>
										{data.year}
									</li>
								))}
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
