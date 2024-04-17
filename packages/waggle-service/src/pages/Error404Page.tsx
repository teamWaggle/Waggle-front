import { useNavigate } from "react-router-dom";

import { Box, Flex, Heading, Text, Logo, Button } from "waggle-design-system";

import { PATH } from "@/constants/path";
import { layoutStyle, headingStyle, textStyle } from "@/components/common/Error/Error.style";
import { HTTP_STATUS_CODE, HTTP_ERROR_MESSAGE } from "@/constants/api";

const Error404Page = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex css={layoutStyle}>
        <Logo width={300} height={300} />
        <Heading css={headingStyle} size="small">
          {HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.NOT_FOUND].HEADING}
        </Heading>
        <Text css={textStyle}>{HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.NOT_FOUND].BODY}</Text>
        <Button onClick={() => navigate(PATH.ROOT)}>
          {HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.NOT_FOUND].BUTTON}
        </Button>
      </Flex>
    </Box>
  );
};
export default Error404Page;
