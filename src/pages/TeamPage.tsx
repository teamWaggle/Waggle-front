import Header from "@/components/Header/Header";
import { TeamInfo } from "@/components/Team";
import CalendarSection from "@/components/Team/CalendarSection/CalendarSection";

const TeamPage = () => {
	return (
		<>
			<Header />
			<CalendarSection />
			<TeamInfo />
		</>
	);
};

export default TeamPage;
