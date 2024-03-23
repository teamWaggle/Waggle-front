import DefaultProfileImg from "@/assets/png/pet-profile.png";

import { Flex, Text } from "@/components/common";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

import { imgStyle } from "@/components/SignUp/Pet/SignUpPet.style";
import {
	inputNoneDisplayStyle,
	commonButtonStyle,
	getFormTextStyle,
} from "@/components/SignUp/SignUp.shared.style";

const PetProfile = ({
	handleImgUpload,
	uploadMediaList,
}: {
	handleImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
	uploadMediaList: string[];
}) => {
	return (
		<Flex styles={{ align: "center", gap: "60px" }}>
			<img
				src={uploadMediaList.length !== 0 ? uploadMediaList[0] : DefaultProfileImg}
				alt="petProfileImg"
				css={imgStyle}
			/>
			<Flex styles={{ direction: "column", gap: "14px" }}>
				<Text css={getFormTextStyle(false)}>프로필 이미지</Text>
				<input type="file" id="profileImg" onChange={handleImgUpload} css={inputNoneDisplayStyle} />
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
	);
};

export default PetProfile;
