import { useSearchParams, useParams } from "react-router-dom";

import { Detail } from "@/components/Siren/Detail";
import SirenEdit from "@/components/Siren/SirenEdit/SirenEdit";

import { useSirenQuery } from "@/hooks/api/useSirenQuery";

const SirenDetailPage = () => {
	const param = useParams();

	const { sirenData } = useSirenQuery(Number(param.id));

	const [searchParams] = useSearchParams();

	return (
		<>
			{sirenData && searchParams.get("mode") === "edit" ? (
				<SirenEdit
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
				<Detail />
			)}
		</>
	);
};

export default SirenDetailPage;
