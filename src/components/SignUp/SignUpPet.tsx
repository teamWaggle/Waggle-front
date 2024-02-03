import { useState } from "react";

import { Flex, Box, Text } from "@/components/common";
import SignUpPetCard from "@/components/SignUp/SignUpPetCard";

import { addCardButtonStyle } from "@/components/SignUp/SignUpPet.style";
import { getNextButtonStyle } from "@/components/SignUp/SignUpProfile.style";

const SignUpPet = () => {
	const [cardNum, setCardNum] = useState(1);

	const [cardList, setCardList] = useState([
		{ id: `card${cardNum}`, component: <SignUpPetCard id={`card${cardNum}`} /> },
	]);

	const handleCard = () => {
		const addList = {
			id: `card${cardNum + 1}`,
			component: <SignUpPetCard id={`card${cardNum}`} />,
		};

		setCardList([...cardList, addList]);
		setCardNum((prev) => prev + 1);
	};

	return (
		<Flex styles={{ direction: "column", width: "554px", marginTop: "50px", gap: "30px" }}>
			{cardList.map((data) => (
				<SignUpPetCard key={data.id} id={data.id} />
			))}

			<Box tag="button" css={addCardButtonStyle} onClick={handleCard}>
				<Text size="large">반려견 카드 추가하기</Text>
			</Box>

			<Flex
				styles={{ align: "center", justify: "space-between", width: "100%", marginTop: "50px" }}
			>
				<Box tag="button" css={getNextButtonStyle("이전")}>
					<Text size="large">이전</Text>
				</Box>
				<Box tag="button" css={getNextButtonStyle("저장하기")}>
					<Text size="large">저장하기</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

export default SignUpPet;
