import { useSearchParams, useParams } from "react-router-dom";

import SirenDetail from "@/components/Siren/SirenDetail/SirenDetail";
import SirenEdit from "@/components/Siren/SirenEdit/SirenEdit";

import { useSirenQuery } from "@/hooks/api/siren/useSirenQuery";

const SirenDetailPage = () => {
  const param = useParams();

  const { sirenData } = useSirenQuery(Number(param.sirenId));

  const [searchParams] = useSearchParams();

  return (
    <>
      {searchParams.get("mode") === "edit" ? (
        <SirenEdit sirenData={sirenData.result} />
      ) : (
        <SirenDetail sirenData={sirenData.result} />
      )}
    </>
  );
};

export default SirenDetailPage;
