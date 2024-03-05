import { useEffect } from "react";

import SelectArrowIcon from "@/assets/svg/ic-select-arrow.svg?react";
import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { yearData, monthData, dayData } from "@/constants/auth";

import type { actionType, findEmailStateType } from "@/utils/findEmailUtils";

import { getSelectBoxStyle } from "@/components/SignUp/Profile/SignUpProfile.style";
import { getFormTextStyle } from "@/components/SignUp/SignUp.shared.style";

const Birthday = ({
	setSelectBirthday,
	state,
	dispatch,
}: {
	setSelectBirthday: React.Dispatch<React.SetStateAction<boolean>>;
	state: findEmailStateType;
	dispatch: React.Dispatch<actionType>;
}) => {
	const handleOptionText = (e: React.MouseEvent<HTMLLIElement>) => {
		const innerText = e.currentTarget.innerText;

		dispatch({ type: `CHANGE_${e.currentTarget.ariaLabel}_TEXT`, payload: innerText });
		dispatch({ type: `CHANGE_${e.currentTarget.ariaLabel}_OPTION` });
		dispatch({ type: `SELECT_${e.currentTarget.ariaLabel}` });
	};

	const validateSelectBox = () => {
		if (state.yearText === "생년" || state.monthText === "월 선택" || state.dayText === "일 선택") {
			return false;
		}

		return true;
	};

	useEffect(() => {
		if (validateSelectBox()) {
			setSelectBirthday(true);
		}
	}, [state, handleOptionText]);

	return (
		<Flex styles={{ direction: "column", gap: "8px" }}>
			<Flex styles={{ gap: "4px", align: "center" }}>
				<Text css={getFormTextStyle(true)}>생년월일</Text>
				<RequiredIcon />
			</Flex>
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
					<Text onClick={() => dispatch({ type: "CHANGE_MONTH_OPTION" })}>{state.monthText}</Text>
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
	);
};

export default Birthday;
