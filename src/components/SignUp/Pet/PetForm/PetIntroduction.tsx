import { Flex, Text } from "@/components/common";

import { getFormTextStyle, getTextareaStyle } from "@/components/SignUp/SignUp.shared.style";

const PetIntroduction = ({
	introduction,
	changeIntroduction,
}: {
	introduction: string;
	changeIntroduction: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<Flex styles={{ direction: "column", gap: "4px" }}>
			<Text css={getFormTextStyle(true)}>반려견 소개</Text>
			<textarea
				css={getTextareaStyle("70px")}
				placeholder="즐겨먹는 간식, 습관 등으로 반려견을 소개해주세요"
				value={introduction}
				onChange={(e) => changeIntroduction(e.target.value)}
			/>
		</Flex>
	);
};

export default PetIntroduction;
