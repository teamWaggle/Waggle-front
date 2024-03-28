import { useParams, useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import { Comment } from "@/components/Siren/SirenDetail";
import SirenContent from "@/components/Siren/SirenDetail/SirenContent/SirenContent";
import SirenTitle from "@/components/Siren/SirenDetail/SirenTitle/SirenTitle";

import { useSirenQuery } from "@/hooks/api/siren/useSirenQuery";
import useModal from "@/hooks/useModal";

import { layoutStyle } from "@/components/common/Post/PostDetail.style";

const SirenDetail = () => {
	const param = useParams();

	const sirenId = Number(param.id);

	const { sirenData } = useSirenQuery(sirenId);

	const navigate = useNavigate();

	const modal = useModal();

	const handleEditSiren = () => {
		if (!sirenData) return;

		navigate(`/siren/view/${sirenId}?mode=edit`);
	};

	const handleDeleteSiren = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={sirenId} target="siren" />,
			notCloseIcon: true,
		});
	};

	if (!sirenData) {
		return <div>로딩중...</div>;
	}

	return (
		<Box tag="main">
			<Flex css={layoutStyle}>
				<SirenTitle
					member={sirenData.result.member}
					category={sirenData.result.category}
					title={sirenData.result.title}
					createdDate={sirenData.result.createdDate}
					viewCount={sirenData.result.viewCount}
					handleEditSiren={handleEditSiren}
					handleDeleteSiren={handleDeleteSiren}
				/>

				<Divider />

				<SirenContent
					lostLocate={sirenData.result.lostLocate}
					petBreed={sirenData.result.petBreed}
					petGender={sirenData.result.petGender}
					lostDate={sirenData.result.lostDate}
					petAge={sirenData.result.petAge}
					contact={sirenData.result.contact}
					mediaList={sirenData.result.mediaList}
					content={sirenData.result.content}
					recommendationInfo={sirenData.result.recommendationInfo}
				/>
			</Flex>

			<Divider />

			<Comment boardId={sirenData.result.boardId} />
		</Box>
	);
};

export default SirenDetail;
