import { MainContainer } from "@/components/common";
import { TeamInfo, TeamSchedule } from "@/components/Team";
import CalendarSection from "@/components/Team/CalendarSection/CalendarSection";

const TeamPage = () => {
  return (
    <>
      <CalendarSection />
      <MainContainer>
        <TeamInfo />
        <TeamSchedule />
      </MainContainer>
    </>
  );
};

export default TeamPage;
