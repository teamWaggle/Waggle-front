import { Flex, Heading } from "@/components/common";
import {
  alertInputBoxStyle,
  alertModalBoxStyle,
} from "@/components/common/AlertModal/AlertModal.style";
import AlertModalButton from "@/components/common/AlertModal/AlertModalButton";

const AlertModal = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <Flex css={alertModalBoxStyle}>
      <Heading size="xSmall">{title}</Heading>
      <Flex css={alertInputBoxStyle}>{children}</Flex>
    </Flex>
  );
};
export default AlertModal;

AlertModal.Button = AlertModalButton;
