import { Box, Flex, Heading, Text, Logo } from "@/components/common";
import Button from "@/components/common/Design/Button/Button";

import { ERROR_CODE, HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from "@/constants/api";

import { useTokenError } from "@/hooks/api/auth/useTokenError";

import { hasKeyInObject } from "@/utils/hasKeyInObject";

import { layoutStyle, headingStyle, textStyle } from "@/components/common/Error/Error.style";

export interface ErrorProps {
  statusCode?: number;
  errorCode?: number;
  resetError?: () => void;
}

const Error = ({ statusCode = HTTP_STATUS_CODE.NOT_FOUND, errorCode, resetError }: ErrorProps) => {
  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, statusCode);

  resetError && resetError();

  const { handleTokenError } = useTokenError();

  if (!isHTTPError) return null;

  if (errorCode && errorCode > ERROR_CODE.TOKEN_ERROR_RANGE) {
    handleTokenError();

    return null;
  }

  return (
    <Box>
      <Flex css={layoutStyle}>
        <Logo width={300} height={300} />
        <Heading css={headingStyle} size="small">
          {HTTP_ERROR_MESSAGE[statusCode].HEADING}
        </Heading>
        <Text css={textStyle}>{HTTP_ERROR_MESSAGE[statusCode].BODY}</Text>
        <Button onClick={resetError}>{HTTP_ERROR_MESSAGE[statusCode].BUTTON}</Button>
      </Flex>
    </Box>
  );
};

export default Error;
