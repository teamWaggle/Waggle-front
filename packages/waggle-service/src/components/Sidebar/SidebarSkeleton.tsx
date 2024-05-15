import { Flex } from "waggle-design-system";

import ProfileSkeleton from "@/components/Sidebar/Profile/ProfileSkeleton";
import WidgetSkeleton from "@/components/Sidebar/Widget/WidgetSkeleton";

const SidebarSkeleton = () => {
  return (
    <Flex styles={{ direction: "column", gap: "32px" }}>
      <ProfileSkeleton />
      <WidgetSkeleton />
    </Flex>
  );
};

export default SidebarSkeleton;
