import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SIGN_UP_TAB_KEY, TAB_KEY } from "@/constants/tab";

import { useMemberInfoFirstMutation } from "@/hooks/api/member/useMemberInfoFirstMutation";
import { useValidateForm } from "@/hooks/useValidateForm";

import type { SignUpProfileFormType } from "@/types/auth";

interface UseSignUpProfileFormParams {
	name: string;
	birthday: string;
	uploadMedia: string;
}

export const useSignUpProfileForm = ({
	name,
	birthday,
	uploadMedia,
}: UseSignUpProfileFormParams) => {
	const { mutate: mutateMemberInfo } = useMemberInfoFirstMutation();

	const navigate = useNavigate();

	const nicknameRef = useRef<HTMLInputElement>(null);
	const userUrlRef = useRef<HTMLInputElement>(null);

	const [nicknameCheckComplete, setNicknameCheckComplete] = useState(false);
	const [userUrlCheckComplete, setUserUrlCheckComplete] = useState(false);

	const [signUpProfileRequest, setSignUpProfileRequest] = useState({
		nickname: "",
		userUrl: "",
	});

	const handleNicknameCheckComplete = (complete: boolean) => {
		setNicknameCheckComplete(complete);
	};

	const handleUserUrlCheckComplete = (complete: boolean) => {
		setUserUrlCheckComplete(complete);
	};

	const validateForm = () => {
		if (
			useValidateForm(signUpProfileRequest.nickname, nicknameRef, "닉네임을 입력해주세요") ===
				false ||
			useValidateForm(nicknameCheckComplete, nicknameRef, "닉네임 중복 확인을 해주세요") ===
				false ||
			useValidateForm(signUpProfileRequest.userUrl, userUrlRef, "프로필 주소를 입력해주세요") ===
				false ||
			useValidateForm(userUrlCheckComplete, userUrlRef, "프로필 주소 중복 확인을 해주세요") ===
				false
		) {
			return false;
		}

		return true;
	};

	const updateInputValue = useCallback(
		<Key extends keyof SignUpProfileFormType>(key: Key, value: SignUpProfileFormType[Key]) => {
			setSignUpProfileRequest((prevSignUpProfileRequest) => {
				const data = {
					...prevSignUpProfileRequest,
					[key]: value,
				};

				return data;
			});
		},
		[],
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		const formData = new FormData();

		const memberProfileRequest = {
			nickname: signUpProfileRequest.nickname,
			name,
			birthday,
			userUrl: signUpProfileRequest.userUrl,
			memberProfileImg: uploadMedia,
		};

		formData.append("memberProfileRequest", JSON.stringify(memberProfileRequest));

		console.log(memberProfileRequest);

		mutateMemberInfo(formData, {
			onSuccess: () => {
				navigate(`/signup?${TAB_KEY}=${SIGN_UP_TAB_KEY.PET}`);
			},
		});
	};

	return {
		nicknameCheckComplete,
		userUrlCheckComplete,
		nicknameRef,
		userUrlRef,
		signUpProfileRequest,
		updateInputValue,
		handleNicknameCheckComplete,
		handleUserUrlCheckComplete,
		handleSubmit,
	};
};
