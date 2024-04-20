import type { FallbackProps } from "react-error-boundary";

import { Box, Flex, Heading, Text, Logo } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { HTTP_ERROR_MESSAGE } from "@/constants/api";

import { hasKeyInObject } from "@/utils/hasKeyInObject";

import { layoutStyle, headingStyle, textStyle } from "@/components/common/Error/Error.style";

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const statusCode = error.response.status;

  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, statusCode);

  if (!isHTTPError) return null;

  return (
    <Box>
      <Flex css={layoutStyle}>
        <Logo width={300} height={300} />
        <Heading css={headingStyle} size="small">
          {HTTP_ERROR_MESSAGE[statusCode].HEADING}
        </Heading>
        <Text css={textStyle}>{HTTP_ERROR_MESSAGE[statusCode].BODY}</Text>
        <Button onClick={resetErrorBoundary}>{HTTP_ERROR_MESSAGE[statusCode].BUTTON}</Button>
      </Flex>
    </Box>
  );
};

export default Error;
