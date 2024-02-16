import { useState } from "react";
import { toast } from "react-toastify";

import DefaultProfileImg from "@/assets/png/profile.png";
import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";

import { Flex, Box, Text, Divider } from "@/components/common";

import { ALLOW_FILE_EXTENSION, FILE_SIZE_MAX_LIMIT } from "@/constants/file";

import { useCheckNicknameMutation } from "@/hooks/api/useCheckNicknameMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { fileExtensionValid } from "@/utils/file";

import {
	imgStyle,
	inputStyle,
	buttonStyle,
	dividerStyle,
	addressInputStyle,
} from "@/components/SignUp/Profile/SignUpProfile.style";
import {
	getFormTextStyle,
	getInputStyle,
	getTextareaStyle,
	getNextButtonStyle,
} from "@/components/SignUp/SignUp.shared.style";

const SignUpProfile = () => {
	const { mutateCheckNickname } = useCheckNicknameMutation();

	const [nickname, setNickname] = useState("");
	const [introduction, setIntroduction] = useState("");
	const [profileAddress, setProfileAddress] = useState("");

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
					height: "760px",
					borderRadius: "2px",
					border: `1px solid ${Theme.color.border}`,
					padding: "60px 0 72px",
				}}
			>
				<Flex styles={{ direction: "column", padding: "0 38px" }}>
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

					<Flex styles={{ marginTop: "30px", direction: "column", gap: "30px" }}>
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
								<Box tag="button" css={buttonStyle} onClick={() => mutateCheckNickname(nickname)}>
									<Text css={getDefaultTextStyle(Theme.color.disabled_text, 500)}>
										닉네임 중복 확인
									</Text>
								</Box>
								<Text css={getDefaultTextStyle(Theme.color.brand_primary, 500)}>
									사용할 수 있는 닉네임입니다
								</Text>
							</Flex>
						</Flex>

						{/* 자기소개 영역 */}
						<Flex styles={{ direction: "column", gap: "8px" }}>
							<Text css={getFormTextStyle(true)}>자기소개</Text>
							<textarea
								css={getTextareaStyle("112px")}
								placeholder="취미, 좋아하는 산책 장소 등으로 자신을 소개해보세요"
								value={introduction}
								onChange={(e) => setIntroduction(e.target.value)}
							/>
						</Flex>
					</Flex>
				</Flex>

				<Divider length="487px" css={dividerStyle} />

				<Flex styles={{ direction: "column", gap: "8px", padding: "0 38px" }}>
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
							value={profileAddress}
							onChange={(e) => setProfileAddress(e.target.value)}
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
			</Box>

			<Box tag="button" css={getNextButtonStyle("다음")}>
				<Text size="large">다음</Text>
			</Box>
		</Flex>
	);
};

export default SignUpProfile;
