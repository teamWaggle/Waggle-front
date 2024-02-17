import { Flex, Text } from "@/components/common";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

const PetName = ({
	name,
	changeName,
}: {
	name: string;
	changeName: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<Flex styles={{ direction: "column", gap: "4px" }}>
			<Text css={getFormTextStyle(true)}>강아지 이름</Text>
			<input
				css={getInputStyle("444px")}
				placeholder="사랑스러운 반려견의 이름을 입력해주세요"
				value={name}
				onChange={(e) => changeName(e.target.value)}
			/>
		</Flex>
	);
};

export default PetName;
