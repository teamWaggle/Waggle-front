import InfomationIcon from "@/assets/svg/infomation.svg?react";

import Flex from "@/components/common/Design/Flex/Flex";
import Text from "@/components/common/Design/Text/Text";

import { infomationStyle } from "@/components/common/InputNotice/InputNotice.style";

const InputNotice = ({ isValid, message }: { isValid: boolean; message?: string }) => {
  return (
    <Flex css={infomationStyle(isValid)}>
      {message && (
        <>
          <InfomationIcon />
          <Text>{message}</Text>
        </>
      )}
    </Flex>
  );
};
export default InputNotice;
