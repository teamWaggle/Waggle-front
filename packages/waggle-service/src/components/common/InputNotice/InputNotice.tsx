import InfomationIcon from "@/assets/svg/infomation.svg?react";

import { Flex, Text } from "waggle-design-system";

import { infomationStyle } from "@/components/common/InputNotice/InputNotice.style";

const InputNotice = ({ isValid, message }: { isValid: boolean; message?: string }) => {
  return (
    <>
      {message && (
        <Flex styles={{ align: "center", gap: "4px" }} css={infomationStyle(isValid)}>
          <InfomationIcon />
          <Text>{message}</Text>
        </Flex>
      )}
    </>
  );
};
export default InputNotice;
