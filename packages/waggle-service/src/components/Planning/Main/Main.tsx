import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

import { Box, Flex, Heading, Text, MainContainer } from "waggle-design-system";
import MemberTeamSlider from "@/components/Planning/Main/MemberTeamSlider/MemberTeamSlider";

import { headingStyle, buttonStyle, gridBoxStyle } from "@/components/Planning/Main/Main.style";
import { SearchInput } from "waggle-design-system";
import { useGetRecommendTeams } from "@/hooks/api/team/useGetRecommendTeams";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";
import useObserver from "@/hooks/common/useObserver";
import LoginAuthorizationContainer from "@/components/common/AuthorizationContainer/LoginAuthorizationContainer";
import { PATH } from "@/constants/path";

const Main = () => {
  const navigate = useNavigate();
  const { recommendTeamsData, fetchNextPage, hasNextPage, isFetching } = useGetRecommendTeams();
  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });
  return (
    <MainContainer>
      <LoginAuthorizationContainer>
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
          <button css={buttonStyle} onClick={() => navigate(PATH.TEAM_CREATE)}>
            <Text size="large">팀 만들기</Text>
          </button>
        </Flex>
        <MemberTeamSlider />
      </LoginAuthorizationContainer>
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
        {recommendTeamsData?.pages?.map((recommendTeamData, page) => (
          <Fragment key={page}>
            {recommendTeamData.result.teamList.map((team) => (
              <TeamCard key={team.teamId} data={team} />
            ))}
          </Fragment>
        ))}
      </Box>
      <div ref={ref} />
    </MainContainer>
  );
};

export default Main;
