import Flex from "@/components/common/Flex/Flex";
import { SirenCard } from "@/components/Siren";

import { useSirenListQuery } from "@/hooks/api/useSirenListQuery";

import { sectionStyle } from "@/components/Siren/Main/Main.style";

const Main = () => {
	const { sirenListData } = useSirenListQuery(0);

	console.log(sirenListData);

	return (
		<section css={sectionStyle}>
			<Flex
				styles={{
					align: "center",
					wrap: "wrap",
					gap: "8px",
				}}
			>
				{sirenListData &&
					sirenListData.result.sirenList.map((sirenInfo) => (
						<SirenCard
							key={sirenInfo.boardId}
							boardId={sirenInfo.boardId}
							thumbnail={sirenInfo.thumbnail}
							title={sirenInfo.title}
							lostLocate={sirenInfo.lostLocate}
							lostDate={sirenInfo.lostDate}
							recommendationInfo={sirenInfo.recommendationInfo}
						/>
					))}
			</Flex>
		</section>
	);
};

export default Main;
