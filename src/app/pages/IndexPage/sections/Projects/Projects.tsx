import axios from "axios";
import {useEffect, useMemo, useState} from "react";
import {useScreenClass} from "react-grid-system";
import styled from "styled-components";
import {Col, Container, Row} from "../../../../components/Grid";
import {H2} from "../../../../components/Text";
import {ProjectsSectionInfo} from "../../../../SectionConstants";
import {Section} from "../../components/Section";
import {ProjectCard} from "./ProjectCard";
import {ProjectInfo} from "./types";

// has even more properties, but we only use these!
type GithubProjectResponse = {
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

const ProjectsPerRowMapping = {
	xs: 12,
	sm: 12,
	md: 6,
	lg: 4,
	xl: 4,
	xxl: 3,
}

export function ProjectsSection() {
	// https://api.github.com/users/Seiikatsu/repos?type=owner&sort=updated&per_page=10
	const [projects, setProjects] = useState<ProjectInfo[] | null>(null);
	const screenClass = useScreenClass();

	useEffect(() => {
		axios
			.get<GithubProjectResponse[]>(
				"https://api.github.com/users/Seiikatsu/repos?type=owner&sort=updated&per_page=10"
			)
			.then((response) => response.data)
			.then((data) =>
				data.filter((project: any) => !(project.disabled || project.archived || project.size === 0))
			)
			.then((data) => {
				const result: ProjectInfo[] = data.map((p) => ({
					title: p.name,
					description: p.description,
					language: p.language,
					stars: p.stargazers_count,
					forks: p.forks,
					license: p.license?.spdx_id,
					url: p.html_url,
				}));
				setProjects(result);
			})
			.catch((e) => e);
	}, []);

	const projectRows = useMemo(() => {
		if (!projects) {
			return;
		}

		const projectNodes = projects.map((project, idx) => (
			<Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} key={idx}>
				<ProjectCard {...project} />
			</Col>
		));

		const perRow = 12 / ProjectsPerRowMapping[screenClass];
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
				<ProjectRow key={rowIdx}>
					{projectNodes.slice(startIdx, startIdx + perRow)}
				</ProjectRow>
			);
		}
		return result;
	}, [projects]);

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
}

const ProjectRow = styled(Row)`
  margin-bottom: 30px;
`;