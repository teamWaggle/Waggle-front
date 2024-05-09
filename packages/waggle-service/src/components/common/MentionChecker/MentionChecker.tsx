import {
  mentionBoxStyle,
  mentionCheckerStyle,
  mentionCheckerDefaultStyle,
} from "@/components/common/MentionChecker/MentionChecker.style";
import { useNavigate } from "react-router-dom";
import { Box } from "waggle-design-system";

const MentionChecker = ({ content }: { content: string }) => {
  // 문자열을 @ 기준으로 분리
  const parts = content.split(" ");
  const navigate = useNavigate();

  const extractUserUrl = (text: string) => {
    const regex = /\((.*?)\)/;
    const match = regex.exec(text);
    return match ? match[1] : "";
  };
  const handleMentionOnClick = (userUrl: string) => {
    navigate(`/${userUrl}?tab=profile`);
  };
  return (
    <Box css={mentionBoxStyle}>
      {parts.map((part, index) => {
        if (part.startsWith("@")) {
          const replacePart = part.replace(/[[\]]/g, "");
          const userUrl = extractUserUrl(replacePart);
          const exceptUserUrlString = replacePart.replace(`(${userUrl})`, "");
          return (
            <Box
              tag="span"
              css={mentionCheckerStyle}
              key={index + part}
              onClick={() => handleMentionOnClick(userUrl)}
            >
              {exceptUserUrlString}
            </Box>
          );
        }
        return (
          <Box tag="span" key={index + part} css={mentionCheckerDefaultStyle}>
            &nbsp;{part}
          </Box>
        );
      })}
    </Box>
  );
};

export default MentionChecker;
