import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from "react";

import SirenDetail from "@/components/Siren/SirenDetail/SirenDetail";
import SirenEdit from "@/components/Siren/SirenEdit/SirenEdit";

import { useSirenQuery } from "@/hooks/api/siren/useSirenQuery";

const SirenDetailPage = () => {
  const param = useParams();

  const { sirenData } = useSirenQuery(Number(param.sirenId));

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size !== 0 && searchParams.get("mode") !== "edit") {
      setSearchParams("mode=edit");
    }
  }, [searchParams]);

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
