import { css } from "@emotion/react";
import { Suspense } from "react";

import { Box } from "waggle-design-system";

import SirenBio from "@/components/Siren/SirenBio/SirenBio";
import SirenMain from "@/components/Siren/SirenMain/SirenMain";
import SirenMainSkeleton from "@/components/Siren/SirenMain/SirenMainSkeleton";

const SirenPage = () => {
  return (
    <Box css={boxStyle}>
      <Suspense fallback={<div />}>
        <SirenBio />
      </Suspense>
      <Suspense fallback={<SirenMainSkeleton />}>
        <SirenMain />
      </Suspense>
    </Box>
  );
};

export default SirenPage;

export const boxStyle = css({
  maxWidth: "1536px",
  margin: "82px auto 0",
  padding: "0 196px",
});
