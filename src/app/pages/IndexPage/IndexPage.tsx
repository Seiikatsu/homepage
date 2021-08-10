import {Landing} from "./components/Landing";
import {Header} from "../../components/Header";
import {AboutSection} from "./sections/About";

export function IndexPage() {
	return (
		<>
			<Header/>
			<Landing/>
			<AboutSection/>
		</>
	);
}