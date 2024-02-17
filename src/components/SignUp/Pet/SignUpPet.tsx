import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DefaultProfileImg from "@/assets/png/pet-profile.png";
import FeMaleDisabledIcon from "@/assets/svg/ic-female-disabled.svg?react";
import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleDisabledIcon from "@/assets/svg/ic-male-disabled.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Box, Heading, Text } from "@/components/common";

import { ALLOW_FILE_EXTENSION, FILE_SIZE_MAX_LIMIT } from "@/constants/file";

import { usePetInfoMutation } from "@/hooks/api/usePetInfoMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { fileExtensionValid } from "@/utils/file";

import { formLayoutStyle, imgStyle } from "@/components/SignUp/Pet/SignUpPet.style";
import {
	inputNoneDisplayStyle,
	commonButtonStyle,
	getFormTextStyle,
	getInputStyle,
	getTextareaStyle,
	getNextButtonStyle,
} from "@/components/SignUp/SignUp.shared.style";

const SignUpPet = () => {
	const petInfoMutation = usePetInfoMutation();

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("FEMALE");
	const [breed, setBreed] = useState("");
	const [introduction, setIntroduction] = useState("");

	const [fileURL, setFileURL] = useState<string>("");

	const validateForm = () => {
		if (!name && !age && !breed && !introduction) {
			return false;
		}

		return true;
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

	const handleSaveClick = () => {
		const formData = new FormData();

		const request = {
			name,
			breed,
			gender,
			age,
			profileImgUrl: fileURL,
			uploadProfile: true,
		};

		formData.append("request", JSON.stringify(request));

		if (validateForm()) {
			petInfoMutation.mutate(formData, { onSuccess: () => navigate("/") });
		}
	};

	return (
		<Flex styles={{ direction: "column", marginTop: "50px", gap: "30px" }}>
			<Flex styles={{ direction: "column", gap: "16px" }}>
				<Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
					나의 첫 번째 반려견
				</Heading>

				<Flex css={formLayoutStyle}>
					{/* 프로필 영역 */}
					<Flex styles={{ align: "center", gap: "60px" }}>
						<img src={fileURL ? fileURL : DefaultProfileImg} alt="petProfileImg" css={imgStyle} />
						<Flex styles={{ direction: "column", gap: "14px" }}>
							<Text css={getFormTextStyle(false)}>프로필 이미지</Text>
							<input
								type="file"
								id="profileImg"
								onChange={handleChangeImg}
								css={inputNoneDisplayStyle}
							/>
							<label htmlFor="profileImg" css={commonButtonStyle}>
								<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
									컴퓨터에서 파일 선택
								</Text>
							</label>
							<Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
								확장자: png, jpg, jpeg / 용량: 1MB 이하
							</Text>
						</Flex>
					</Flex>

					{/* 강아지 이름 영역 */}
					<Flex styles={{ direction: "column", gap: "4px" }}>
						<Text css={getFormTextStyle(true)}>강아지 이름</Text>
						<input
							css={getInputStyle("444px")}
							placeholder="사랑스러운 반려견의 이름을 입력해주세요"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Flex>

					<Flex styles={{ align: "center", gap: "60px" }}>
						{/* 강아지 나이 영역 */}
						<Flex styles={{ direction: "column", gap: "4px" }}>
							<Text css={getFormTextStyle(true)}>강아지 나이</Text>
							<input
								css={getInputStyle("214px")}
								placeholder="강아지 나이를 입력해주세요"
								value={age}
								onChange={(e) => setAge(e.target.value)}
							/>
						</Flex>

						{/* 강아지 성별 영역 */}
						<Flex styles={{ direction: "column", gap: "4px" }}>
							<Text css={getFormTextStyle(false)}>강아지 성별</Text>
							<Flex styles={{ gap: "16px", height: "44px", align: "center" }}>
								{gender === "FEMALE" ? (
									<FeMaleIcon onClick={() => setGender("FEMALE")} />
								) : (
									<FeMaleDisabledIcon onClick={() => setGender("FEMALE")} />
								)}

								{gender === "MALE" ? (
									<MaleIcon onClick={() => setGender("MALE")} />
								) : (
									<MaleDisabledIcon onClick={() => setGender("MALE")} />
								)}
							</Flex>
						</Flex>
					</Flex>

					{/* 강아지 종 영역 */}
					<Flex styles={{ direction: "column", gap: "4px" }}>
						<Text css={getFormTextStyle(true)}>강아지 종</Text>
						<input
							css={getInputStyle("444px")}
							placeholder="강아지종을 입력해주세요"
							value={breed}
							onChange={(e) => setBreed(e.target.value)}
						/>
					</Flex>

					{/* 반려견 소개 영역 */}
					<Flex styles={{ direction: "column", gap: "4px" }}>
						<Text css={getFormTextStyle(true)}>반려견 소개</Text>
						<textarea
							css={getTextareaStyle("70px")}
							placeholder="즐겨먹는 간식, 습관 등으로 반려견을 소개해주세요"
							value={introduction}
							onChange={(e) => setIntroduction(e.target.value)}
						/>
					</Flex>
				</Flex>
			</Flex>

			<Flex
				styles={{ align: "center", justify: "space-between", width: "100%", marginTop: "30px" }}
			>
				<Box tag="button" css={getNextButtonStyle("이전")}>
					<Text size="large">이전</Text>
				</Box>

				<Box tag="button" css={getNextButtonStyle("저장하기")} onClick={handleSaveClick}>
					<Text size="large">저장하기</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

export default SignUpPet;
