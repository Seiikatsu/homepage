import styled from "styled-components";
import { ComponentProps, useState } from "react";
import { Span } from "../Text";
import { Li, Ul } from "../List";
import { Drawer } from '../Drawer';
import content from "./Logo.svg";
import SectionInfos from "../../SectionConstants";
import { Col, Container, Row } from "../Grid";
import { Icon } from "../Icon";
import { faBars } from "../../icon";
import { Hidden } from "react-grid-system";

type NavigationProps = {
  orientation: ComponentProps<typeof Ul>['orientation'];
  onEntryClick?: () => void;
}

function Navigation(props: NavigationProps) {
  const { onEntryClick, orientation } = props;
  return (
    <Nav>
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
    </Nav>
  )
}

export function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <HeaderComponent>
      <Container>
        <Row align="center">
          <Col xs={6} sm={6} md={2} xl={6} xxl={6}>
            <img src={content} alt="logo" height={48} width={48} />
          </Col>
          <Col xs={6} sm={6} md={10} xl={6} xxl={6}>
          <Hidden sm md xl xxl>
              <MobileNavOpenerContainer>
                <Icon icon={faBars} clickable size="2x" onClick={() => setNavOpen(!navOpen)} />
              </MobileNavOpenerContainer>
            </Hidden>
            <Hidden xs>
              <Navigation orientation="horizontal" />
            </Hidden>
          </Col>
        </Row>
      </Container>
      <Drawer visible={navOpen}>
        <Navigation orientation="vertical" onEntryClick={() => setNavOpen(false)} />
      </Drawer>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2; // section with background have index of 1

  background-color: ${(p) => p.theme.backgroundVariant};
  border-bottom: 1px solid ${(p) => p.theme.borderVariant};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MobileNavOpenerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: end;
`;

