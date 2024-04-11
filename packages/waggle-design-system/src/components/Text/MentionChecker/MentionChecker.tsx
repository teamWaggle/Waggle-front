import Box from "@/components/Box/Box";
import {
  mentionCheckerStyle,
  mentionBoxStyle,
  mentionCheckerDefaultStyle,
} from "@/components/Text/MentionChecker/MentionChecker.style";

const MentionChecker = ({ content }: { content: string }) => {
  // 문자열을 @ 기준으로 분리
  const parts = content.split(" ");
  return (
    <Box tag="span" css={mentionBoxStyle}>
      {parts.map((part, index) => {
        // @로 시작하는 부분인지 확인
        if (part.startsWith("@")) {
          const replacePart = part.replace(/[[\]]/g, "");
          // @로 시작하는 경우, 스타일을 적용하여 출력
          return (
            <Box tag="span" css={mentionCheckerStyle} key={index}>
              {replacePart}
            </Box>
          );
        } else {
          // @로 시작하지 않는 경우 그냥 출력
          return (
            <Box tag="span" key={index} css={mentionCheckerDefaultStyle}>
              &nbsp;{part}
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default MentionChecker;
