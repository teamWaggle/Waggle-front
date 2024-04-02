import Flex from "@/components/common/Design/Flex/Flex";
import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { useSirenListQuery } from "@/hooks/api/siren/useSirenListQuery";

const SirenMain = () => {
	const { sirenListData } = useSirenListQuery(0);

	return (
		<Flex
			tag="section"
			styles={{
				align: "center",
				wrap: "wrap",
				gap: "20px",
				marginTop: "50px",
			}}
		>
			{sirenListData.result.sirenList.map((sirenInfo) => (
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
	);
};

export default SirenMain;
