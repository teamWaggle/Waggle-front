import { Flex, Carousel } from "@/components/common";
import PostUploadMedia from "@/components/common/Post/PostUploadMedia/PostUploadMedia";

import type { SirenFormData } from "@/types/siren";

import { contentTextareaStyle } from "@/components/common/Post/PostUpload/PostUpload.style";

interface PostUploadPropsType {
	value: string;
	updateInputValue: <Key extends keyof SirenFormData>(key: Key, value: SirenFormData[Key]) => void;
	isLoading: boolean;
	uploadMediaList: string[];
	handleImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
	dropImgUpload: (e: React.DragEvent<HTMLDivElement>) => void;
}

const PostUpload = ({
	value,
	updateInputValue,
	isLoading,
	uploadMediaList,
	handleImgUpload,
	dropImgUpload,
}: PostUploadPropsType) => {
	return (
		<Flex styles={{ gap: "64px", marginTop: "60px" }}>
			{!isLoading ? (
				<Carousel
					width={536}
					height={466}
					borderRadius="20px"
					showArrows={uploadMediaList.length > 1}
					showDots={uploadMediaList.length > 1}
					length={uploadMediaList.length}
				>
					{uploadMediaList.map((imgUrl, index) => (
						<Carousel.Item index={index} key={imgUrl}>
							<img src={imgUrl} alt="mediaImg" />
						</Carousel.Item>
					))}
				</Carousel>
			) : (
				<PostUploadMedia handleImgUpload={handleImgUpload} dropImgUpload={dropImgUpload} />
			)}

			<textarea
				placeholder="글을 입력해주세요"
				css={contentTextareaStyle}
				value={value}
				onChange={(e) => updateInputValue("content", e.target.value)}
			/>
		</Flex>
	);
};

export default PostUpload;
