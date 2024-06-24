import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";

import { Box, Flex, Heading, Text, MainContainer } from "waggle-design-system";
import MemberTeamSlider from "@/components/Planning/Main/MemberTeamSlider/MemberTeamSlider";

import { headingStyle, buttonStyle, gridBoxStyle } from "@/components/Planning/Main/Main.style";
import SearchInput from "@/components/common/SearchInput/SearchInput";
import { useGetRecommendTeams } from "@/hooks/api/team/useGetRecommendTeams";
import TeamCard from "@/components/Planning/TeamCard/TeamCard";
import useObserver from "@/hooks/common/useObserver";
import LoginAuthorizationContainer from "@/components/common/AuthorizationContainer/LoginAuthorizationContainer";
import { PATH } from "@/constants/path";
import { useGetSearchTeamsByName } from "@/hooks/api/team/useGetSearchTeamsByName";

const Main = () => {
  const navigate = useNavigate();
  const [searchNameValue] = useState<string>("");
  const {
    recommendTeamsData,
    fetchNextPage: recommendTeamsFetchNextPage,
    hasNextPage: recommendTeamsHasNextPage,
    isFetching: recommendIsFetching,
  } = useGetRecommendTeams();
  const {
    searchTeamsData,
    fetchNextPage: searchTeamsFetchNextPage,
    hasNextPage: searchTeamsHasNextPage,
    isFetching: searchTeamsIsFetching,
  } = useGetSearchTeamsByName(searchNameValue);
  // const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchNameValue(e.target.value);
  // };
  const ref = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (recommendTeamsHasNextPage && !recommendIsFetching) {
      recommendTeamsFetchNextPage();
    }
  });
  const searchRef = useObserver(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (searchTeamsHasNextPage && !searchTeamsIsFetching) {
      searchTeamsFetchNextPage();
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
        <SearchInput
          keyword="test"
          handleChangeInput={() => {}}
          handleSearchClick={() => {}}
          width="247px"
        />
      </Flex>
      <Box css={gridBoxStyle}>
        {!searchNameValue
          ? recommendTeamsData?.pages?.map((recommendTeamData, page) => (
              <Fragment key={page}>
                {recommendTeamData.result.teamList.map((team) => (
                  <TeamCard key={team.teamId} data={team} />
                ))}
              </Fragment>
            ))
          : searchTeamsData?.pages.map((searchTeamData, page) => (
              <Fragment key={page}>
                {searchTeamData.result.teamList.map((team) => (
                  <TeamCard key={team.teamId} data={team} />
                ))}
              </Fragment>
            ))}
      </Box>
      <Box ref={ref} />
      <Box ref={searchRef} />
    </MainContainer>
  );
};

export default Main;
