import type { FallbackProps } from "react-error-boundary";

import { Box, Flex, Heading, Text, Logo, Button } from "waggle-design-system";

import { HTTP_ERROR_MESSAGE } from "@/constants/api";

import { hasKeyInObject } from "@/utils/hasKeyInObject";

import { layoutStyle, headingStyle, textStyle } from "@/components/common/Error/Error.style";

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const statusCode = error.response.status;

  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, statusCode);

  if (!isHTTPError) return null;

  return (
    <Box>
      <Flex
        styles={{ direction: "column", align: "center", position: "absolute" }}
        css={layoutStyle}
      >
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
