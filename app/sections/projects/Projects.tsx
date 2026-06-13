import {FC} from 'react';
import {Container} from '~/components/grid';
import {Section} from '~/components/section/Section';
import {H2} from 'app/components/text';
import {ProjectCard} from '~/sections/projects/ProjectCard';
import {ProjectsSectionProps} from '~/sections/projects/types';
import {ProjectsSectionInfo} from '~/sections/sectionConstants';

export const ProjectsSection: FC<ProjectsSectionProps> = ({projects}) => {
	return (
		<Section id={ProjectsSectionInfo.id}>
			<Container>
				<H2 primary>{ProjectsSectionInfo.text}</H2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
					{projects?.map((project, idx) => (
						<ProjectCard {...project} key={idx}/>
					))}
				</div>
			</Container>
		</Section>
	);
};
