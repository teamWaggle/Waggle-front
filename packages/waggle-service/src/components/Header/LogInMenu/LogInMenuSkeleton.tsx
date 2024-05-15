import { Flex, Spinner } from "waggle-design-system";

const LogInMenuSkeleton = () => {
  return (
    <Flex styles={{ width: "80px", height: "40px", justify: "center" }}>
      <Spinner size={30} width={3} />
    </Flex>
  );
};

export default LogInMenuSkeleton;
