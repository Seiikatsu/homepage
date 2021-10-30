import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "../../../../components/Grid";
import { H2 } from "../../../../components/Text";
import { ProjectsSectionInfo } from "../../../../SectionConstants";
import { Section } from "../../components/Section";
import { ProjectCard } from "./ProjectCard";
import { ProjectInfo } from "./types";

export function ProjectsSection() {
  // https://api.github.com/users/Seiikatsu/repos?type=owner&sort=updated&per_page=10
  const [projects, setProjects] = useState<ProjectInfo[] | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/Seiikatsu/repos?type=owner&sort=updated&per_page=10"
      )
      .then((response) => response.data)
      .then((data) =>
        data.filter((project: any) => !(project.disabled || project.archived))
      )
      .then((data) => {
        const result: ProjectInfo[] = [];
        for (const p of data) {
          result.push({
            title: p.name,
            description: p.description,
            language: p.language,
            stars: p.stargazers_count,
            forks: p.forks,
            license: p.license?.spdx_id,
            url: p.url,
          });
        }
        setProjects(result);
      })
      .catch((e) => e);
  }, []);

  return (
    <Section id={ProjectsSectionInfo.id}>
      <Container>
        <Row>
          <Col xs={12}>
            <H2 primary>{ProjectsSectionInfo.text}</H2>
          </Col>
        </Row>
        <Row>
          {projects?.map((p, idx) => (
            <Col xs={12} key={idx}>
              <ProjectCard {...p} />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
