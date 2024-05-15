import { css } from "@emotion/react";

import { Box } from "waggle-design-system";

import SirenBio from "@/components/Siren/SirenBio/SirenBio";
import SirenMain from "@/components/Siren/SirenMain/SirenMain";

const SirenPage = () => {
  return (
    <Box css={boxStyle}>
      <SirenBio />
      <SirenMain />
    </Box>
  );
};

export default SirenPage;

export const boxStyle = css({
  maxWidth: "1536px",
  margin: "82px auto 0",
  padding: "0 196px",
});
