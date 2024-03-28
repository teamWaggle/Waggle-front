import SirenBio from "@/components/Siren/SirenBio/SirenBio";
import SirenMain from "@/components/Siren/SirenMain/SirenMain";
import SirenSearchBar from "@/components/Siren/SirenSearchBar/SirenSearchBar";

const SirenPage = () => {
	return (
		<>
			<SirenBio />
			<SirenSearchBar />
			<SirenMain />
		</>
	);
};

export default SirenPage;
