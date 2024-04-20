import Flex from "@/components/common/Design/Flex/Flex";

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
    </Flex>
  );
};

export default QuestionSidebar;
