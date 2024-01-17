import ProfileIcon from "@/assets/svg/ProfileIcon.svg?react";
import RequiredIcon from "@/assets/svg/RequiredIcon.svg?react";
import { Flex, Box, Text, Divider } from "@/components/common";
import { Theme } from "@/styles/Theme";

import {
	textStyle,
	buttonStyle,
	buttonTextStyle,
	inputStyle,
	nicknameTextStyle,
	textareaStyle,
	dividerStyle,
} from "@/components/SignUp/SignUpProfile.style";

const SignUpProfile = () => {
	return (
		<Box
			styles={{
				width: "554px",
				height: "760px",
				borderRadius: "2px",
				border: `1px solid ${Theme.color.border}`,
				marginTop: "50px",
				padding: "60px 0 72px",
			}}
		>
			<Flex styles={{ direction: "column", padding: "0 38px" }}>
				{/* 프로필 영역 */}
				<Flex styles={{ align: "center", gap: "60px" }}>
					<ProfileIcon />
					<Flex styles={{ direction: "column", gap: "14px" }}>
						<Text css={textStyle}>프로필 이미지</Text>
						<Box tag="button" css={buttonStyle}>
							<Text css={buttonTextStyle}>컴퓨터에서 파일 선택</Text>
						</Box>
						<Text size="small" css={buttonTextStyle}>
							확장자: png, jpg, jpeg / 용량: 1MB 이하
						</Text>
					</Flex>
				</Flex>

				<Flex styles={{ marginTop: "30px", direction: "column", gap: "30px" }}>
					{/* 닉네임 영역 */}
					<Flex styles={{ direction: "column", gap: "8px" }}>
						<Flex styles={{ gap: "4px", align: "center" }}>
							<Text css={textStyle}>닉네임</Text>
							<RequiredIcon />
						</Flex>
						<input css={inputStyle} placeholder="닉네임을 입력해주세요! 언제든지 변경 가능해요" />
						<Flex styles={{ gap: "16px", align: "center" }}>
							<Box tag="button" css={buttonStyle}>
								<Text css={buttonTextStyle}>닉네임 중복 확인</Text>
							</Box>
							<Text css={nicknameTextStyle}>사용할 수 있는 닉네임입니다</Text>
						</Flex>
					</Flex>

					{/* 자기소개 영역 */}
					<Flex styles={{ direction: "column", gap: "8px" }}>
						<Text css={textStyle}>자기소개</Text>
						<textarea
							css={textareaStyle}
							placeholder="취미, 좋아하는 산책 장소 등으로 자신을 소개해보세요"
						/>
					</Flex>
				</Flex>
			</Flex>

			<Divider length="487px" css={dividerStyle} />
		</Box>
	);
};

export default SignUpProfile;