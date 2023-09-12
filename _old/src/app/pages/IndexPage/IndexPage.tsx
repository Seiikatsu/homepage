import {Landing} from "./sections/Landing";
import {Header} from "../../components/Header";
import {AboutSection} from "./sections/About";
import { SkillsSection } from "./sections/Skills";
import {CopyrightSection} from "./sections/Copyright";
import { ContactSection } from "./sections/Contact";
import { ProjectsSection } from "./sections/Projects";

export function IndexPage() {
	return (
		<>
			<Header/>
			<Landing/>
			<AboutSection/>
			<SkillsSection/>
			<ProjectsSection/>
			<ContactSection/>
			<CopyrightSection/>
		</>
	);
}
