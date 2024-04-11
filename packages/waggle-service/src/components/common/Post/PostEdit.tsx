import { Flex, Carousel } from "@/components/common";

import type { QuestionFormData } from "@/types/question";
import type { SirenFormData } from "@/types/siren";

import { contentTextareaStyle } from "@/components/common/Post/PostUpload/PostUpload.style";

interface PostEditPropsType {
  value: string;
  sirenUpdateInputValue?: <Key extends keyof SirenFormData>(
    key: Key,
    value: SirenFormData[Key]
  ) => void;
  questionUpdateInputValue?: <Key extends keyof QuestionFormData>(
    key: Key,
    value: QuestionFormData[Key]
  ) => void;
  updateMediaList: string[];
}

const PostEdit = ({
  value,
  sirenUpdateInputValue,
  questionUpdateInputValue,
  updateMediaList,
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
        sirenUpdateInputValue={sirenUpdateInputValue}
        questionUpdateInputValue={questionUpdateInputValue}
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
        value={value}
        onChange={(e) =>
          sirenUpdateInputValue
            ? sirenUpdateInputValue("content", e.target.value)
            : questionUpdateInputValue && questionUpdateInputValue("content", e.target.value)
        }
      />
    </Flex>
  );
};

export default PostEdit;
