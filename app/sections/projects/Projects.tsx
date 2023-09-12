import {FC, useMemo} from 'react';
import {ScreenClass, useScreenClass} from 'react-grid-system';
import {Col, Container, Row} from '~/components/grid';
import {Section} from '~/components/section/Section';
import {H2} from 'app/components/text';
import {ProjectCard} from '~/sections/projects/ProjectCard';
import {ProjectsSectionProps} from '~/sections/projects/types';
import {ProjectsSectionInfo} from '~/sections/sectionConstants';


const projectColumnsPerScreenSize: Record<ScreenClass, number> = {
	xs: 12,
	sm: 12,
	md: 6,
	lg: 4,
	xl: 4,
	xxl: 3,
	xxxl: 2,
};

export const ProjectsSection: FC<ProjectsSectionProps> = ({projects}) => {
	// https://api.github.com/users/Seiikatsu/repos?type=owner&sort=updated&per_page=10
	const screenClass = useScreenClass();

	const projectRows = useMemo(() => {
		if (!projects) {
			return;
		}

		const projectNodes = projects.map((project, idx) => (
			<Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} key={idx}>
				<ProjectCard {...project} />
			</Col>
		));

		const perRow = 12 / projectColumnsPerScreenSize[screenClass];
		if (projectNodes.length <= perRow) {
			return (
				<Row>
					{projectNodes}
				</Row>
			);
		}

		const result = [];
		const rowsToCreate = projectNodes.length / perRow;
		for (let rowIdx = 0; rowIdx < rowsToCreate; rowIdx++) {
			const startIdx = perRow * rowIdx;
			result.push(
				<Row className="mb-8" key={rowIdx}>
					{projectNodes.slice(startIdx, startIdx + perRow)}
				</Row>
			);
		}
		return result;
	}, [projects, screenClass]);

	return (
		<Section id={ProjectsSectionInfo.id}>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
						<H2 primary>{ProjectsSectionInfo.text}</H2>
					</Col>
				</Row>
				{projectRows}
			</Container>
		</Section>
	);
};
