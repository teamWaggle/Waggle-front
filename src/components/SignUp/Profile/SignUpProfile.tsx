import { useState, useReducer, useRef } from "react";
// import { useNavigate } from "react-router-dom";

import { Flex, Box, Text } from "@/components/common";
import {
	Profile,
	Nickname,
	NicknameDescription,
	ProfileAddress,
	Name,
	Birthday,
} from "@/components/SignUp/Profile/ProfileForm";

// import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useMemberInfoFirstMutation } from "@/hooks/api/useMemberInfoFirstMutation";
import { useValidateForm } from "@/hooks/useValidateForm";

import { Theme } from "@/styles/Theme";

import { dateFormatToUTC } from "@/utils/dateFormatToUTC";
import { findEmailReducer, findEmailInitialState } from "@/utils/findEmailUtils";

import { getNextButtonStyle } from "@/components/SignUp/SignUp.shared.style";

const SignUpProfile = () => {
	const { mutateMemberInfo } = useMemberInfoFirstMutation();

	const [state, dispatch] = useReducer(findEmailReducer, findEmailInitialState);

	// console.log(state.yearText);
	// console.log(state.monthText);
	// console.log(state.dayText);

	// const navigate = useNavigate();

	const nicknameRef = useRef<HTMLInputElement>(null);
	const userUrlRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const birthdayRef = useRef<HTMLInputElement>(null);

	const [nickname, setNickname] = useState("");
	const [userUrl, setUserUrl] = useState("");
	const [name, setName] = useState("");
	const [fileURL, setFileURL] = useState<string>("");

	const [nicknameCheckComplete, setNicknameCheckComplete] = useState(false);
	const [userUrlCheckComplete, setUserUrlCheckComplete] = useState(false);
	const [selectBirthday, setSelectBirthday] = useState(false);

	const validateForm = () => {
		if (
			useValidateForm(nickname, nicknameRef, "닉네임을 입력해주세요") === false ||
			useValidateForm(nicknameCheckComplete, nicknameRef, "닉네임 중복 확인을 해주세요") ===
				false ||
			useValidateForm(userUrl, userUrlRef, "프로필 주소를 입력해주세요") === false ||
			useValidateForm(userUrlCheckComplete, userUrlRef, "프로필 주소 중복 확인을 해주세요") ===
				false ||
			useValidateForm(name, nameRef, "이름을 입력해주세요") === false ||
			useValidateForm(selectBirthday, birthdayRef, "생년월일을 입력해주세요") === false
		) {
			return false;
		}

		return true;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		const formData = new FormData();
		const birthday = dateFormatToUTC(state.yearText, state.monthText, state.dayText);

		const memberProfileRequest = {
			nickname,
			name,
			birthday,
			userUrl,
			memberProfileImg: fileURL,
		};

		formData.append("memberProfileRequest", JSON.stringify(memberProfileRequest));

		for (const key of formData.keys()) {
			console.log(key);
		}

		for (const value of formData.values()) {
			console.log(value);
		}

		mutateMemberInfo(formData, {
			onSuccess: (code) => {
				// navigate(`/signup?${TAB_KEY}=${SIGN_UP_TAB_KEY.PET}`);
				console.log(code);
			},
			onError: (code) => {
				console.log(code);
			},
		});
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
					<Profile fileURL={fileURL} changeFile={setFileURL} />

					{/* 닉네임 영역 */}
					<Nickname
						nickname={nickname}
						changeNickname={setNickname}
						nicknameRef={nicknameRef}
						nicknameCheckComplete={nicknameCheckComplete}
						changeNicknameCheckComplete={setNicknameCheckComplete}
					/>

					{/* 닉네임 용도 설명 영역 */}
					<NicknameDescription />

					{/* 프로필 주소 영역 */}
					<ProfileAddress
						userUrl={userUrl}
						changeUserUrl={setUserUrl}
						userUrlRef={userUrlRef}
						userUrlCheckComplete={userUrlCheckComplete}
						changeUserUrlCheckComplete={setUserUrlCheckComplete}
					/>

					{/* 이름 영역 */}
					<Name name={name} changeName={setName} nameRef={nameRef} />

					{/* 생년월일 영역 */}
					<Birthday setSelectBirthday={setSelectBirthday} state={state} dispatch={dispatch} />
				</Flex>
			</Box>

			<Box tag="button" css={getNextButtonStyle("다음")} onClick={handleSubmit}>
				<Text size="large">다음</Text>
			</Box>
		</Flex>
	);
};

export default SignUpProfile;
