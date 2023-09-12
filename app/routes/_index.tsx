import type {V2_MetaFunction} from '@remix-run/node';
import {Header} from '~/components/header';
import {Landing} from '~/sections/Landing';

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
			{/*<AboutSection/>*/}
			{/*<SkillsSection/>*/}
			{/*<ProjectsSection/>*/}
			{/*<ContactSection/>*/}
			{/*<CopyrightSection/>*/}
		</>
	);
}
