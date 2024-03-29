import { Flex, Carousel } from "@/components/common";

import { contentTextareaStyle } from "@/components/common/Post/PostUpload/PostUpload.style";

interface PostEditPropsType {
	updateMediaList: string[];
	setUpdateMediaList: React.Dispatch<React.SetStateAction<string[]>>;
	newContent: string;
	setNewContent: React.Dispatch<React.SetStateAction<string>>;
}

const PostEdit = ({
	updateMediaList,
	setUpdateMediaList,
	newContent,
	setNewContent,
}: PostEditPropsType) => {
	return (
		<Flex styles={{ gap: "64px", marginTop: "60px" }}>
			<Carousel
				width={536}
				height={466}
				borderRadius="20px"
				showArrows={updateMediaList.length > 1}
				showDots={updateMediaList.length > 1}
				length={updateMediaList.length}
				updateMediaList={updateMediaList}
				setUpdateMediaList={setUpdateMediaList}
				hasGallery
			>
				{updateMediaList.map((imgUrl, index) => (
					<Carousel.Item index={index} key={imgUrl}>
						<img src={imgUrl} alt="mediaImg" />
					</Carousel.Item>
				))}
			</Carousel>

			<textarea
				placeholder="글을 입력해주세요"
				css={contentTextareaStyle}
				value={newContent}
				onChange={(e) => setNewContent(e.target.value)}
			/>
		</Flex>
	);
};

export default PostEdit;
