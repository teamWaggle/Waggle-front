import { useParams, useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import { Content, Comment } from "@/components/Siren/Detail";
import SirenTitle from "@/components/Siren/Detail/SirenTitle/SirenTitle";

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

	return (
		<Box tag="main">
			{sirenData && (
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
					<Content
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
			)}

			<Divider />
			{sirenData && <Comment boardId={sirenData.result.boardId} />}
		</Box>
	);
};

export default SirenDetail;
