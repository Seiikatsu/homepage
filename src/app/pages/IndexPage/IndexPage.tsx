import {Landing} from "./components/Landing";
import {Header} from "../../components/Header";
import {AboutSection} from "./sections/About";
import {CopyrightSection} from "./sections/About/Copyright";

export function IndexPage() {
	return (
		<>
			<Header/>
			<Landing/>
			<AboutSection/>
			<CopyrightSection/>
		</>
	);
}