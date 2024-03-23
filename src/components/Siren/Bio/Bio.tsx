import { useNavigate } from "react-router-dom";

import { Flex, Box, Heading, Text } from "@/components/common";
import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { useSirenRepresentativeQuery } from "@/hooks/api/siren/useSirenRepresentativeQuery";

import { buttonStyle, boxStyle, titleStyle } from "@/components/Siren/Bio/Bio.style";

const Bio = () => {
	const { sirenRepresentativeListData } = useSirenRepresentativeQuery();

	const navigate = useNavigate();

	return (
		<Box tag="section" css={boxStyle}>
			<Flex styles={{ gap: "50px" }}>
				<Flex styles={{ direction: "column", gap: "28px" }}>
					<Flex css={titleStyle}>
						<Heading>위급한 일이 생겼나요?</Heading>
						<Heading>Waggle 견주들과</Heading>
						<Heading>함께 문제를 해결해요</Heading>
					</Flex>

					<button css={buttonStyle} onClick={() => navigate("/siren-new")}>
						<Text size="xLarge">글 작성하기</Text>
					</button>
				</Flex>

				<Flex styles={{ gap: "12px" }}>
					{sirenRepresentativeListData &&
						sirenRepresentativeListData.result.sirenList.map((sirenInfo) => (
							<SirenCard
								key={sirenInfo.boardId}
								boardId={sirenInfo.boardId}
								thumbnail={sirenInfo.thumbnail}
								title={sirenInfo.title}
								lostLocate={sirenInfo.lostLocate}
								recommendationInfo={sirenInfo.recommendationInfo}
								category={sirenInfo.category}
								status={sirenInfo.status}
								createdDate={sirenInfo.createdDate}
							/>
						))}
				</Flex>
			</Flex>
		</Box>
	);
};

export default Bio;
