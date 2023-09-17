import type {V2_MetaFunction} from '@remix-run/node';
import {json} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {AboutSection} from 'app/sections/about';
import {Landing} from 'app/sections/landing';
import {Header} from '~/components/header';
import {ContactSection} from '~/sections/contact';
import {CopyrightSection} from '~/sections/copyright';
import {ProjectsSection} from '~/sections/projects';
import {ProjectInfo} from '~/sections/projects/types';
import {SkillsSection} from '~/sections/skills';

export const meta: V2_MetaFunction = () => {
	return [
		{title: 'Homepage'},
		{name: 'description', content: 'Welcome to Remix!'},
	];
};

// has even more properties, but we only use these!
type GithubProjectResponse = {
	disabled: boolean;
	archived: boolean;
	private: boolean;
	fork: boolean;
	name: string;
	description: string;
	language: string | null;
	stargazers_count: number;
	forks: number;
	license?: {
		spdx_id: string;
	};
	html_url: string;
	size: number;
}

export const loader = async () => {
	const projectsResponse: GithubProjectResponse[] = await (await fetch('https://api.github.com/users/Seiikatsu/repos?type=owner&sort=updated&per_page=10')).json();
	const projects = projectsResponse.filter((project) => !(project.disabled || project.archived || project.private || project.fork))
		.map((p) => ({
			title: p.name,
			description: p.description,
			language: p.language,
			stars: p.stargazers_count,
			forks: p.forks,
			license: p.license?.spdx_id,
			url: p.html_url,
		} satisfies ProjectInfo));

	return json({
		projects
	});
};

export const action = async () => {
	return json({message: 'This is a JSON response'});
};

export default function Index() {
	const {projects} = useLoaderData<typeof loader>();
	return (
		<>
			<Header/>
			<Landing/>
			<AboutSection/>
			<SkillsSection/>
			<ProjectsSection projects={projects}/>
			<ContactSection/>
			<CopyrightSection/>
		</>
	);
}
