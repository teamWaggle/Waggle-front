import Flex from "@/components/Flex/Flex";
import { tagStyle } from "@/components/Tag/Tag.style";
import Text from "@/components/Text/Text";
import { Theme } from "@/styles/Theme";
import { generateTagStyle, generateTagName } from "@/utils/generateTag";

interface TagParams {
  tagText: string;
  isResolveTag?: boolean;
}

const Tag = ({ tagText, isResolveTag }: TagParams) => {
  if (isResolveTag) {
    return (
      <Flex
        css={tagStyle(tagText === "RESOLVED" ? Theme.color.btn_success : Theme.color.btn_danger)}
      >
        <Text>{tagText === "RESOLVED" ? "해결" : "미해결"}</Text>
      </Flex>
    );
  }

  return (
    <Flex css={tagStyle(generateTagStyle(tagText))}>
      <Text>{generateTagName(tagText)}</Text>
    </Flex>
  );
};

export default Tag;
