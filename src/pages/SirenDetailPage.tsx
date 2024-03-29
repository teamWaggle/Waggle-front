import { useSearchParams, useParams } from "react-router-dom";

import SirenDetail from "@/components/Siren/SirenDetail/SirenDetail";
import SirenEdit from "@/components/Siren/SirenEdit/SirenEdit";

import { useSirenQuery } from "@/hooks/api/siren/useSirenQuery";

const SirenDetailPage = () => {
	const param = useParams();

	const { sirenData } = useSirenQuery(Number(param.sirenId));

	const [searchParams] = useSearchParams();

	return (
		<>
			{searchParams.get("mode") === "edit" ? (
				<SirenEdit
					boardId={sirenData.result.boardId}
					title={sirenData.result.title}
					category={sirenData.result.category}
					lostLocate={sirenData.result.lostLocate}
					lostDate={sirenData.result.lostDate}
					petAge={sirenData.result.petAge}
					petBreed={sirenData.result.petBreed}
					petGender={sirenData.result.petGender}
					contact={sirenData.result.contact}
					content={sirenData.result.content}
					mediaList={sirenData.result.mediaList}
				/>
			) : (
				<SirenDetail
					boardId={sirenData.result.boardId}
					title={sirenData.result.title}
					category={sirenData.result.category}
					lostLocate={sirenData.result.lostLocate}
					lostDate={sirenData.result.lostDate}
					petAge={sirenData.result.petAge}
					petBreed={sirenData.result.petBreed}
					petGender={sirenData.result.petGender}
					contact={sirenData.result.contact}
					content={sirenData.result.content}
					mediaList={sirenData.result.mediaList}
					member={sirenData.result.member}
					createdDate={sirenData.result.createdDate}
					viewCount={sirenData.result.viewCount}
					recommendationInfo={sirenData.result.recommendationInfo}
					status={sirenData.result.status}
				/>
			)}
		</>
	);
};

export default SirenDetailPage;
