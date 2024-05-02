import { Flex, Heading } from "waggle-design-system";

import AlertModalButton from "@/components/common/AlertModal/AlertModalButton";

import { alertModalBoxStyle } from "@/components/common/AlertModal/AlertModal.style";

const AlertModal = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <Flex
      styles={{ direction: "column", align: "center", justify: "center" }}
      css={alertModalBoxStyle}
    >
      <Heading size="xSmall">{title}</Heading>
      <Flex styles={{ marginTop: "32px", width: "100%", gap: "12px" }}>{children}</Flex>
    </Flex>
  );
};
export default AlertModal;

AlertModal.Button = AlertModalButton;
