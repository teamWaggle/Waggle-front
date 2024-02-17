import { useReducer } from "react";

import SelectArrowIcon from "@/assets/svg/ic-select-arrow.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { yearData, monthData, dayData } from "@/constants/auth";

import { findEmailReducer, fintEmailInitialState } from "@/utils/fintEmailUtils";

import {
	formTextStyle,
	inputStyle,
	getSelectBoxStyle,
	buttonStyle,
} from "@/components/Landing/Sidebar/Login/FindEmailModal.style";

const FindEmail = () => {
	const [state, dispatch] = useReducer(findEmailReducer, fintEmailInitialState);

	const handleOptionText = (e: React.MouseEvent<HTMLLIElement>) => {
		const innerText = e.currentTarget.innerText;

		dispatch({ type: `CHANGE_${e.currentTarget.ariaLabel}_TEXT`, payload: innerText });
		dispatch({ type: `CHANGE_${e.currentTarget.ariaLabel}_OPTION` });
		dispatch({ type: `SELECT_${e.currentTarget.ariaLabel}` });
	};

	return (
		<>
			<Flex styles={{ direction: "column", gap: "8px" }}>
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={formTextStyle}>이름</Text>
					<input css={inputStyle} placeholder="이름을 입력해주세요" />
				</Flex>
				<Flex styles={{ direction: "column", gap: "8px" }}>
					<Text css={formTextStyle}>생년월일</Text>
					<Flex styles={{ gap: "13px" }}>
						{/* 생년 */}
						<Box css={getSelectBoxStyle(state.year, state.yearSelect)}>
							<Text onClick={() => dispatch({ type: "CHANGE_YEAR_OPTION" })}>{state.yearText}</Text>
							<ul>
								{yearData.map((data) => (
									<li key={data.selectText} onClick={handleOptionText} aria-label="YEAR">
										{data.selectText}
									</li>
								))}
							</ul>
							<SelectArrowIcon />
						</Box>

						{/* 월 선택 */}
						<Box css={getSelectBoxStyle(state.month, state.monthSelect)}>
							<Text onClick={() => dispatch({ type: "CHANGE_MONTH_OPTION" })}>
								{state.monthText}
							</Text>
							<ul>
								{monthData.map((data) => (
									<li key={data.selectText} onClick={handleOptionText} aria-label="MONTH">
										{data.selectText}
									</li>
								))}
							</ul>
							<SelectArrowIcon />
						</Box>

						{/* 일 선택 */}
						<Box css={getSelectBoxStyle(state.day, state.daySelect)}>
							<Text onClick={() => dispatch({ type: "CHANGE_DAY_OPTION" })}>{state.dayText}</Text>
							<ul>
								{dayData.map((data) => (
									<li key={data.selectText} onClick={handleOptionText} aria-label="DAY">
										{data.selectText}
									</li>
								))}
							</ul>
							<SelectArrowIcon />
						</Box>
					</Flex>
				</Flex>
			</Flex>
			<button type="submit" css={buttonStyle}>
				인증하기
			</button>
		</>
	);
};

export default FindEmail;
