import { Flex, Spinner } from "waggle-design-system";

const LoadingPage = () => {
  return (
    <Flex styles={{ justify: "center", align: "center", height: "100vh" }}>
      <Spinner />
    </Flex>
  );
};

export default LoadingPage;
