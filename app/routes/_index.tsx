import {DataFunctionArgs, json, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {AboutSection} from 'app/sections/about';
import {Landing} from 'app/sections/landing';
import {sanitize} from 'isomorphic-dompurify';
import {getCacheValue, setCacheValue} from '~/cache';
import {Header} from '~/components/header';
import {contactFormSchema, ContactSection} from '~/sections/contact';
import {CopyrightSection} from '~/sections/copyright';
import {ProjectsSection} from '~/sections/projects';
import {ProjectInfo} from '~/sections/projects/types';
import {SkillsSection} from '~/sections/skills';
import {env} from '~/utils/env';
import {mailTransport} from '~/utils/mail.server';

export const meta: MetaFunction = () => {
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

const PROJECTS_CACHE_KEY = 'homepage.projects';

const TIMEOUT_IN_SECONDS = 60 * 60 * 24; // 1 day

export const loader = async () => {
  let projects: ProjectInfo[] = [];
  const cacheValue = await getCacheValue<ProjectInfo[]>(PROJECTS_CACHE_KEY);
  if (cacheValue === null) { // this is not as secure as it could be, but it should be fine for now.
    try {
      const projectsResponse: GithubProjectResponse[] = await (await fetch('https://api.github.com/users/Seiikatsu/repos?type=owner&sort=updated&per_page=10')).json();
      projects = projectsResponse.filter((project) => !(project.disabled || project.archived || project.private || project.fork))
        .map((p) => ({
          title: p.name,
          description: p.description,
          language: p.language,
          stars: p.stargazers_count,
          forks: p.forks,
          license: p.license?.spdx_id,
          url: p.html_url,
        } satisfies ProjectInfo))
        .reverse();
    } catch (e) {
      console.error('Could not fetch projects:', e);
    }
    await setCacheValue(PROJECTS_CACHE_KEY, projects, TIMEOUT_IN_SECONDS);
  } else {
    projects = cacheValue;
  }

  return json({
    projects
  });
};

export const action = async ({request}: DataFunctionArgs) => {
  const result = await contactFormSchema.validate(await request.formData());
  if (result.error) {
    return json({ok: false, message: 'Invalid form data'});
  }

  try {
    await mailTransport.sendMail({
      from: env.MAIL_SERVER_USER,
      to: env.MAIL_SERVER_RECEIVER,
      subject: sanitize(result.data.subject),
      text: `Name: ${sanitize(result.data.name)}\nE-Mail: ${sanitize(result.data.email)}\nMessage: ${sanitize(result.data.content)}`,
    });
  } catch (e) {
    console.error('Could not send email', e);
    return json({ok: false, message: 'Could not send email, try again later.'});
  }

  return json({ok: true, message: 'Success!'});
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
