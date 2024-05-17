import { MainContainer } from "waggle-design-system";
import { TeamInfo, TeamSchedule } from "@/components/Team";
import CalendarSection from "@/components/Team/CalendarSection/CalendarSection";
import Footer from "@/components/common/Footer/Footer";

const TeamPage = () => {
  return (
    <>
      <CalendarSection />
      <MainContainer>
        <TeamInfo />
        <TeamSchedule />
      </MainContainer>
      <Footer />
    </>
  );
};

export default TeamPage;
