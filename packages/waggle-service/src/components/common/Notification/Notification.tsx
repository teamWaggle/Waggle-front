import { Flex } from "waggle-design-system";

import NotificationCard from "@/components/common/Notification/NotificationCard/NotificationCard";

import { layoutStyle } from "@/components/common/Notification/Notification.style";

const Notification = () => {
  return (
    <Flex styles={{ position: "absolute" }} css={layoutStyle}>
      <Flex styles={{ direction: "column", width: "100%" }}>
        <NotificationCard
          nickname="정한"
          hasTitle
          hasContent
          category="SIREN"
          createdDate="2024.03.25"
        />
        <NotificationCard
          nickname="정한"
          hasContent
          category="Waggle Log"
          createdDate="2024.03.25"
        />
        <NotificationCard
          nickname="정한"
          isRequest
          category="PLANNING"
          createdDate="2024.03.25"
          teamName="말티즈 친구들"
        />
        <NotificationCard
          nickname="정한"
          isFollow
          category="CONNECTION"
          createdDate="2024.03.25"
          teamName="말티즈 친구들"
        />
        <NotificationCard
          nickname="정한"
          isFollow
          category="CONNECTION"
          createdDate="2024.03.25"
          teamName="말티즈 친구들"
        />
        <NotificationCard
          nickname="정한"
          isFollow
          category="CONNECTION"
          createdDate="2024.03.25"
          teamName="말티즈 친구들"
        />
        <NotificationCard
          nickname="정한"
          isFollow
          category="CONNECTION"
          createdDate="2024.03.25"
          teamName="말티즈 친구들"
        />
      </Flex>
    </Flex>
  );
};

export default Notification;
