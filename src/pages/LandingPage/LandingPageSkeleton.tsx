import { Bio } from "@/components/Landing";
import MainSkeleton from "@/components/Landing/Main/MainSkeleton";

const LandingPageSkeleton = () => {
	return (
		<>
			<Bio />
			<MainSkeleton />
		</>
	);
};

export default LandingPageSkeleton;
