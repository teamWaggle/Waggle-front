import Flex from "@/components/common/Design/Flex/Flex";
import NotificationCard from "@/components/common/Notification/NotificationCard/NotificationCard";
import QuestionSidebarProfile from "@/components/Question/QuestionSidebar/QuestionSidebarProfile/QuestionSidebarProfile";

const QuestionSidebar = () => {
  return (
    <Flex
      styles={{
        direction: "column",
        width: "315px",
        gap: "14px",
        align: "center",
      }}
      tag="aside"
    >
      <QuestionSidebarProfile />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </Flex>
  );
};

export default QuestionSidebar;
