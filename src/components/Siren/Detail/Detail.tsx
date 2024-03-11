import { useParams } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import { Title, Content, Comment } from "@/components/Siren/Detail";

import { useSirenQuery } from "@/hooks/api/useSirenQuery";

import { layoutStyle } from "@/components/Siren/Detail/Detail.style";

const Detail = () => {
	const param = useParams();

	const { sirenData } = useSirenQuery(Number(param.id));

	console.log(sirenData);

	return (
		<Box tag="main">
			{sirenData && (
				<Flex css={layoutStyle}>
					<Title
						member={sirenData.result.member}
						category={sirenData.result.category}
						title={sirenData.result.title}
						lostDate={sirenData.result.lostDate}
					/>
					<Divider />
					<Content
						lostLocate={sirenData.result.lostLocate}
						petBreed={sirenData.result.petBreed}
						petGender={sirenData.result.petGender}
						lostDate={sirenData.result.lostDate}
						petAge={sirenData.result.petAge}
						contact={sirenData.result.contact}
						mediaList={sirenData.result.mediaList}
						content={sirenData.result.content}
						// recommendIt={sirenData.result.recommendIt}
						// recommendCount={sirenData.result.recommendCount}
					/>
				</Flex>
			)}

			<Divider />
			{sirenData && <Comment boardId={sirenData?.result.boardId} />}
		</Box>
	);
};

export default Detail;
