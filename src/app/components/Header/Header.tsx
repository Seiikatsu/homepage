import styled from "styled-components";
import { useState } from "react";
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
  onEntryClick?: () => void;
}

function Navigation(props: NavigationProps) {
  const { onEntryClick } = props;
  return (
    <Nav>
      <Ul orientation="vertical">
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
        <Row>
          <Col xs={6}>
            <img src={content} alt="logo" height={48} width={48} />
          </Col>
          <Col xs={6}>
            <MobileNavOpenerContainer>
              <Icon icon={faBars} clickable size="2x" onClick={() => setNavOpen(!navOpen)} />
            </MobileNavOpenerContainer>
          </Col>
          <Col xs={0} md={1}>
            <Hidden xs>
              <Navigation />
            </Hidden>
          </Col>
        </Row>
      </Container>
      <Drawer visible={navOpen}>
        <Navigation onEntryClick={() => setNavOpen(false)} />
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
`;

const MobileNavOpenerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: end;
`;

