import { Flex } from "waggle-design-system";

import NotificationCard from "@/components/common/Notification/NotificationCard/NotificationCard";

import { layoutStyle } from "@/components/common/Notification/Notification.style";

const Notification = () => {
  return (
    <Flex styles={{ position: "absolute" }} css={layoutStyle}>
      <Flex styles={{ direction: "column" }}>
        <NotificationCard nickname="정한" hasTitle />
      </Flex>
    </Flex>
  );
};

export default Notification;
