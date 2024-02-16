import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DefaultProfileImg from "@/assets/png/profile.png";
import PasswordCheckIcon from "@/assets/svg/ic-password-check.svg?react";
import SelectArrowIcon from "@/assets/svg/ic-select-arrow.svg?react";
import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Box, Text } from "@/components/common";

import { yearData, monthData, dayData } from "@/constants/auth";
import { ALLOW_FILE_EXTENSION, FILE_SIZE_MAX_LIMIT } from "@/constants/file";
import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useCheckNicknameMutation } from "@/hooks/api/useCheckNicknameMutation";
import { useMemberInfoFirstMutation } from "@/hooks/api/useMemberInfoFirstMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { dateFormatToUTC } from "@/utils/dateFormatToUTC";
import { fileExtensionValid } from "@/utils/file";
import { findEmailReducer, fintEmailInitialState } from "@/utils/findEmailUtils";

import {
	imgStyle,
	inputStyle,
	buttonStyle,
	getNicknameTextStyle,
	addressInputStyle,
	getSelectBoxStyle,
} from "@/components/SignUp/Profile/SignUpProfile.style";
import {
	getFormTextStyle,
	getInputStyle,
	getNextButtonStyle,
} from "@/components/SignUp/SignUp.shared.style";

const SignUpProfile = () => {
	const checkNicknameMutation = useCheckNicknameMutation();
	const { mutateMemberInfo } = useMemberInfoFirstMutation();

	const navigate = useNavigate();

	const [state, dispatch] = useReducer(findEmailReducer, fintEmailInitialState);

	const [nickname, setNickname] = useState("");
	const [userUrl, setUserUrl] = useState("");
	const [name, setName] = useState("");

	const [fileURL, setFileURL] = useState<string>("");

	const [isNicknameCheck, setIsNicknameCheck] = useState(false);
	const [nicknameCheckComplete, setNicknameCheckComplete] = useState(false);

	const [userUrlCheckComplete] = useState(false);

	const validateForm = () => {
		if (!nickname) {
			toast.error("닉네임을 입력해주세요");

			return false;
		}

		if (!nicknameCheckComplete) {
			toast.error("닉네임 중복 확인을 해주세요");

			return false;
		}

		if (!userUrl) {
			toast.error("프로필 주소를 입력해주세요");

			return false;
		}

		if (!userUrlCheckComplete) {
			toast.error("프로필 주소 중복 확인을 해주세요");

			return false;
		}

		if (!name) {
			toast.error("이름을 입력해주세요");

			return false;
		}

		return true;
	};

	const handleNicknameCheck = () => {
		setIsNicknameCheck(true);

		checkNicknameMutation.mutate(nickname, {
			onSuccess: () => {
				setNicknameCheckComplete(true);
			},
		});
	};

	const handleOptionText = (e: React.MouseEvent<HTMLLIElement>) => {
		const innerText = e.currentTarget.innerText;

		dispatch({ type: `CHANGE_${e.currentTarget.ariaLabel}_TEXT`, payload: innerText });
		dispatch({ type: `CHANGE_${e.currentTarget.ariaLabel}_OPTION` });
		dispatch({ type: `SELECT_${e.currentTarget.ariaLabel}` });
	};

	const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.currentTarget;
		const files = (target.files as FileList)[0];

		if (files === undefined) {
			return;
		}

		if (!fileExtensionValid(files)) {
			target.value = "";

			toast.error(`업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`);

			return;
		}

		if (files.size > FILE_SIZE_MAX_LIMIT) {
			target.value = "";
			toast.error("업로드 가능한 최대 용량은 1MB입니다. ");
			return;
		}

		const newFileURL = URL.createObjectURL(files);
		setFileURL(newFileURL);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		const formData = new FormData();
		const birthday = dateFormatToUTC(state.yearText, state.monthText, state.dayText);

		const request = {
			nickname,
			name,
			birthday,
			userUrl,
			profileImgUrl: fileURL,
		};

		formData.append("request", JSON.stringify(request));

		mutateMemberInfo(formData);

		navigate(`/signup?${TAB_KEY}=${SIGN_UP_TAB_KEY.PET}`);
	};

	return (
		<Flex
			styles={{
				direction: "column",
				gap: "50px",
				width: "554px",
				marginTop: "50px",
				align: "flex-end",
			}}
		>
			<Box
				styles={{
					borderRadius: "2px",
					border: `1px solid ${Theme.color.border}`,
					padding: "60px 38px 62px",
				}}
			>
				<Flex styles={{ direction: "column", gap: "36px" }}>
					{/* 프로필 영역 */}
					<Flex styles={{ align: "center", gap: "60px" }}>
						<img src={fileURL ? fileURL : DefaultProfileImg} alt="profileImg" css={imgStyle} />
						<Flex styles={{ direction: "column", gap: "14px" }}>
							<Text css={getFormTextStyle(false)}>프로필 이미지</Text>
							<input type="file" id="profileImg" onChange={handleChangeImg} css={inputStyle} />
							<label htmlFor="profileImg" css={buttonStyle}>
								<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
									컴퓨터에서 파일 선택
								</Text>
							</label>
							<Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
								확장자: png, jpg, jpeg / 용량: 1MB 이하
							</Text>
						</Flex>
					</Flex>

					{/* 닉네임 영역 */}
					<Flex styles={{ direction: "column", gap: "8px" }}>
						<Flex styles={{ gap: "4px", align: "center" }}>
							<Text css={getFormTextStyle(true)}>닉네임</Text>
							<RequiredIcon />
						</Flex>
						<input
							css={getInputStyle("444px")}
							placeholder="닉네임을 입력해주세요! 언제든지 변경 가능해요"
							value={nickname}
							onChange={(e) => setNickname(e.target.value)}
						/>
						<Flex styles={{ gap: "16px", align: "center" }}>
							<Box tag="button" css={buttonStyle} onClick={handleNicknameCheck}>
								<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
									닉네임 중복 확인
								</Text>
							</Box>

							<Text css={getNicknameTextStyle(isNicknameCheck && nicknameCheckComplete)}>
								{isNicknameCheck && !nicknameCheckComplete && "사용할 수 없는 닉네임입니다"}

								{isNicknameCheck && nicknameCheckComplete && "사용할 수 있는 닉네임입니다"}
							</Text>
						</Flex>
					</Flex>

					{/* 닉네임 용도 설명 영역 */}
					<Flex styles={{ direction: "column", gap: "12px" }}>
						<Text css={getDefaultTextStyle(Theme.color.text, 600)}>닉네임은 이런 곳에 쓰여요!</Text>
						<Flex styles={{ direction: "column", gap: "8px" }}>
							<Flex styles={{ align: "center", gap: "6px" }}>
								<PasswordCheckIcon />
								<Text size="small" css={getDefaultTextStyle(Theme.color.text, 500)}>
									닉네임으로 게시물을 작성하거나 댓글을 남길 수 있어요
								</Text>
							</Flex>
							<Flex styles={{ align: "center", gap: "6px" }}>
								<PasswordCheckIcon />
								<Text size="small" css={getDefaultTextStyle(Theme.color.text, 500)}>
									상대방이 나를 언급할 때 내 닉네임을 사용해 태그할 수 있어요
								</Text>
							</Flex>
						</Flex>
					</Flex>

					{/* 프로필 주소 영역 */}
					<Flex styles={{ direction: "column", gap: "8px" }}>
						<Flex styles={{ gap: "4px", align: "center" }}>
							<Text css={getFormTextStyle(false)}>프로필 주소</Text>
							<RequiredIcon />
						</Flex>
						<Flex styles={{ align: "center", gap: "6px" }}>
							<Text css={getDefaultTextStyle(Theme.color.text, 500)}>
								https://www.waggle.com/users/@
							</Text>
							<input
								css={addressInputStyle}
								placeholder="나만의 프로필 주소를 만들어보세요"
								value={userUrl}
								onChange={(e) => setUserUrl(e.target.value)}
							/>
						</Flex>

						<Flex styles={{ align: "center", gap: "16px" }}>
							<Box tag="button" css={buttonStyle}>
								<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
									프로필 주소 중복 확인
								</Text>
							</Box>
							<Text css={getDefaultTextStyle(Theme.color.brand_primary, 500)}>
								사용할 수 있는 주소입니다
							</Text>
						</Flex>
					</Flex>

					{/* 이름 영역 */}
					<Flex styles={{ direction: "column", gap: "8px" }}>
						<Flex styles={{ gap: "4px", align: "center" }}>
							<Text css={getFormTextStyle(true)}>이름(실명)</Text>
							<RequiredIcon />
						</Flex>
						<input
							css={getInputStyle("444px")}
							placeholder="이름을 입력해주세요"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Flex>

					{/* 생년월일 영역 */}
					<Flex styles={{ direction: "column", gap: "8px" }}>
						<Flex styles={{ gap: "4px", align: "center" }}>
							<Text css={getFormTextStyle(true)}>생년월일</Text>
							<RequiredIcon />
						</Flex>
						<Flex styles={{ gap: "13px" }}>
							{/* 생년 */}
							<Box css={getSelectBoxStyle(state.year, state.yearSelect)}>
								<Text onClick={() => dispatch({ type: "CHANGE_YEAR_OPTION" })}>
									{state.yearText}
								</Text>
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
			</Box>

			<Box tag="button" css={getNextButtonStyle("다음")} onClick={handleSubmit}>
				<Text size="large">다음</Text>
			</Box>
		</Flex>
	);
};

export default SignUpProfile;
