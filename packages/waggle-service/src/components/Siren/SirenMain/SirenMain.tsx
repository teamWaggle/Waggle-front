import Flex from "@/components/common/Design/Flex/Flex";
import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { useSirenListQuery } from "@/hooks/api/siren/useSirenListQuery";

const SirenMain = () => {
  const { sirenListData } = useSirenListQuery(0);

  return (
    <Flex
      tag="section"
      styles={{
        align: "center",
        wrap: "wrap",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {sirenListData.result.sirenList.map((sirenInfo) => (
        <SirenCard key={sirenInfo.boardId} sirenInfo={sirenInfo} />
      ))}
    </Flex>
  );
};

export default SirenMain;
