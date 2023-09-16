import type {V2_MetaFunction} from '@remix-run/node';
import {Header} from '~/components/header';
import {AboutSection} from 'app/sections/about';
import {Landing} from 'app/sections/landing';

export const meta: V2_MetaFunction = () => {
	return [
		{title: 'Homepage'},
		{name: 'description', content: 'Welcome to Remix!'},
	];
};

export default function Index() {
	return (
		<>
			<Header/>
			<Landing/>
			<AboutSection/>
			{/*<SkillsSection/>*/}
			{/*<ProjectsSection/>*/}
			{/*<ContactSection/>*/}
			{/*<CopyrightSection/>*/}
		</>
	);
}
