import { useState } from "react";
import { toast } from "react-toastify";

import DefaultProfileImg from "@/assets/png/pet-profile.png";
import FeMaleDisabledIcon from "@/assets/svg/ic-female-disabled.svg?react";
import FeMaleIcon from "@/assets/svg/ic-female.svg?react";
import MaleDisabledIcon from "@/assets/svg/ic-male-disabled.svg?react";
import MaleIcon from "@/assets/svg/ic-male.svg?react";

import { Flex, Heading, Text } from "@/components/common";

import { ALLOW_FILE_EXTENSION, FILE_SIZE_MAX_LIMIT } from "@/constants/file";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { fileExtensionValid } from "@/utils/file";

import { imgStyle, inputStyle, buttonStyle } from "@/components/SignUp/Profile/SignUpProfile.style";
import {
	getFormTextStyle,
	getInputStyle,
	getTextareaStyle,
} from "@/components/SignUp/SignUp.shared.style";
import { convertPetNumToText } from "@/utils/pet";

interface PetCardType {
	id: string;
}

const SignUpPetCard = ({ id }: PetCardType) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("female");
	const [breed, setBreed] = useState("");
	const [introduction, setIntroduction] = useState("");

	const [fileURL, setFileURL] = useState<string>("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [file, setFile] = useState<File | null>();

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

		setFile(files);

		const newFileURL = URL.createObjectURL(files);
		setFileURL(newFileURL);
	};

	return (
		<Flex styles={{ direction: "column", gap: "30px" }}>
			<Heading size="xSmall" css={getDefaultTextStyle(Theme.color.text, 600)}>
				{`나의 ${convertPetNumToText(id)} 번째 반려견`}
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
					<img src={fileURL ? fileURL : DefaultProfileImg} alt="petProfileImg" css={imgStyle} />
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
							{gender === "female" ? (
								<FeMaleIcon onClick={() => setGender("female")} />
							) : (
								<FeMaleDisabledIcon onClick={() => setGender("female")} />
							)}

							{gender === "male" ? (
								<MaleIcon onClick={() => setGender("male")} />
							) : (
								<MaleDisabledIcon onClick={() => setGender("male")} />
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
	);
};

export default SignUpPetCard;
