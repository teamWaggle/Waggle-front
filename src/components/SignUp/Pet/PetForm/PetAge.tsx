import { Flex, Text } from "@/components/common";

import { getFormTextStyle, getInputStyle } from "@/components/SignUp/SignUp.shared.style";

const PetAge = ({
	age,
	changeAge,
}: {
	age: string;
	changeAge: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<Flex styles={{ direction: "column", gap: "4px" }}>
			<Text css={getFormTextStyle(true)}>강아지 나이</Text>
			<input
				css={getInputStyle("214px")}
				placeholder="강아지 나이를 입력해주세요"
				value={age}
				onChange={(e) => changeAge(e.target.value)}
			/>
		</Flex>
	);
};

export default PetAge;
