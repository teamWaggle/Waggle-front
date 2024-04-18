// import { Box, Button, Flex, Heading, Text } from "waggle-design-system";

import { ERROR_CODE, HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from "@/constants/api";

import { useTokenError } from "@/hooks/api/auth/useTokenError";

import { hasKeyInObject } from "@/utils/hasKeyInObject";

// import { layoutStyle, headingStyle, textStyle } from "@/components/common/Error/Error.style";

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
    // <Box>
    //   <Flex css={layoutStyle}>
    //     <Heading>fsdf</Heading>
    //   </Flex>
    // </Box>
    <div>test</div>
  );
};

export default Error;
