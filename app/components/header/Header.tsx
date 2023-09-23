import {ComponentProps, useState} from 'react';
import {Hidden} from 'react-grid-system';
import {Drawer} from '~/components/drawer';
import {Col, Container, Row} from 'app/components/grid';
import {Icon} from '~/components/icon';
import {Li, Ul} from '~/components/list';
import {Span} from 'app/components/text';
import {faBars} from '~/icon';
import SectionInfos from '../../sections/sectionConstants';
import content from './Logo.svg';

type NavigationProps = {
	orientation: ComponentProps<typeof Ul>['orientation'];
	onEntryClick?: () => void;
}

function Navigation(props: NavigationProps) {
	const {onEntryClick, orientation} = props;
	return (
		<nav className="flex justify-end items-center">
			<Ul orientation={orientation}>
				{SectionInfos.map((info, idx) => (
					<Li
						onClick={() => {
							if (onEntryClick) {
								onEntryClick();
							}
							if (info.onClick) {
								window.location.hash = '';
								info.onClick();
							} else {
								window.location.hash = info.id;
							}
						}}
						key={idx}
					>
						<Span primary>{info.text}</Span>
					</Li>
				))}
			</Ul>
		</nav>
	);
}

export function Header() {
	const [navOpen, setNavOpen] = useState<boolean>(false);
	return (
		<header className="sticky top-0 left-0 z-[2] bg-background-variant border-b border-b-background-variant">
			<Container className="z-[1]">
				<Row align="center" className="h-[56px]">
					<Col xs={6} sm={6} md={2} lg={2} xl={2} xxl={2}>
						<img src={content} alt="logo" height={48} width={48}/>
					</Col>
					<Col xs={6} sm={6} md={10} lg={10} xl={10} xxl={10}>
						<Hidden sm md lg xl xxl>
							<div className="flex h-full w-full items-center justify-end">
								<Icon icon={faBars} clickable size="2x" onClick={() => setNavOpen(!navOpen)}/>
							</div>
						</Hidden>
						<Hidden xs>
							<Navigation orientation="horizontal"/>
						</Hidden>
					</Col>
				</Row>
			</Container>
			<Drawer visible={navOpen}>
				<Navigation orientation="vertical" onEntryClick={() => setNavOpen(false)}/>
			</Drawer>
		</header>
	);
}
