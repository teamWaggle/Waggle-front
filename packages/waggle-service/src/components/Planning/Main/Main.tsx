import { useNavigate } from "react-router-dom";

import { Box, Flex, Heading, Text, MainContainer } from "waggle-design-system";
import MemberTeamSlider from "@/components/Planning/Main/MemberTeamSlider/MemberTeamSlider";

import { headingStyle, buttonStyle, gridBoxStyle } from "@/components/Planning/Main/Main.style";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "@/recoil/atoms/auth";
import { SearchInput } from "waggle-design-system";

const Main = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return (
    <MainContainer>
      <Flex
        styles={{
          justify: "space-between",
          align: "center",
          marginTop: "52px",
          marginBottom: "23px",
        }}
      >
        <Heading css={headingStyle} size="medium">
          My TEAM
        </Heading>
        <button css={buttonStyle} onClick={() => navigate("/planning/create-team")}>
          <Text size="large">팀 만들기</Text>
        </button>
      </Flex>
      {isLoggedIn && <MemberTeamSlider />}
      <Flex
        styles={{
          justify: "space-between",
          align: "center",
          marginTop: "52px",
          marginBottom: "23px",
        }}
      >
        <Heading css={headingStyle} size="medium">
          Waggle에서 모여봐요!
        </Heading>
        <SearchInput onChange={() => {}} width="247px" />
      </Flex>
      <Box css={gridBoxStyle}>
        {/* {teamList?.map((data) => <TeamCard key={data.teamId} data={data} />)} */}
      </Box>
    </MainContainer>
  );
};

export default Main;
