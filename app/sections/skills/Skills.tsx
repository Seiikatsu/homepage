import {Col, Container, Row} from '~/components/grid';
import {Section} from '~/components/section';
import {H2} from 'app/components/text';
import {SkillsSectionInfo} from '~/sections/sectionConstants';
import {ProgressBar} from '~/sections/skills/components/ProgressBar';
import {TimelineTree} from '~/sections/skills/components/TimelineTree';
import {EDUCATION} from '~/sections/skills/education';
import {EXPERIENCE} from '~/sections/skills/experience';
import background from './background.jpg';

export function SkillsSection() {
	return (
		<Section id={SkillsSectionInfo.id} backgroundImage={background}>
			{/* https://www.pexels.com/photo/flatlay-display-of-electronics-next-to-eyeglases-3184454/ */}
			<Container>
				<Row align="start">
					<Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
						<H2 primary>Education</H2>
						<TimelineTree entries={EDUCATION}/>
					</Col>
					<Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
						<H2 primary>Experience</H2>
						<TimelineTree entries={EXPERIENCE}/>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={4}>
						<H2 primary>My Skills</H2>
						{/* 1em (Timeline Container) + 1em (Li) + 6px (Title) */}
						<div className="pt-[calc(2em+6px)]">
							<ProgressBar title="Java" progress={100}/>
							<ProgressBar title="JavaScript" progress={100}/>
							<ProgressBar title="HTML" progress={100}/>
							<ProgressBar title="TypeScript" progress={85}/>
							<ProgressBar title="CSS" progress={80}/>
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	);
}
