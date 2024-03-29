import { useNavigate } from "react-router-dom";

import { Flex, Box, Divider } from "@/components/common";
import Comment from "@/components/common/Comment/Comment";
import DeleteWarningModal from "@/components/common/WarningModal/DeleteWarningModal";
import SirenContent from "@/components/Siren/SirenDetail/SirenContent/SirenContent";
import SirenTitle from "@/components/Siren/SirenDetail/SirenTitle";

import { PATH } from "@/constants/path";

import useModal from "@/hooks/useModal";

import type { SirenResultType } from "@/types/siren";

import { layoutStyle } from "@/components/common/Post/Post.style";

const SirenDetail = ({
	boardId,
	title,
	category,
	lostLocate,
	lostDate,
	petAge,
	petBreed,
	petGender,
	contact,
	content,
	mediaList,
	member,
	viewCount,
	createdDate,
	recommendationInfo,
	status,
}: SirenResultType) => {
	const navigate = useNavigate();

	const modal = useModal();

	const handleDeleteSiren = () => {
		modal.openModal({
			key: `DeleteWarningModal`,
			component: () => <DeleteWarningModal targetId={boardId} target="siren" />,
			notCloseIcon: true,
		});
	};

	return (
		<Box tag="main">
			<Flex css={layoutStyle}>
				<SirenTitle
					member={member}
					category={category}
					title={title}
					status={status}
					createdDate={createdDate}
					viewCount={viewCount}
					handleEditSiren={() => navigate(PATH.SIREN_EDIT(String(boardId)))}
					handleDeleteSiren={handleDeleteSiren}
				/>

				<Divider />

				<SirenContent
					lostLocate={lostLocate}
					petBreed={petBreed}
					petGender={petGender}
					lostDate={lostDate}
					petAge={petAge}
					contact={contact}
					mediaList={mediaList}
					content={content}
					recommendationInfo={recommendationInfo}
				/>
			</Flex>

			<Divider />

			<Comment boardId={boardId} />
		</Box>
	);
};

export default SirenDetail;
