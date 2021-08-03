import styled, {css} from "styled-components";
import {useState} from "react";
import {media} from "../../../styles/media";

export function Header() {
	const [fixed, setFixed] = useState<boolean>(false);
	return (
		<HeaderComponent fixed={fixed}>
			<Wrapper>
				<div>Seikatsu (logo)</div>
				<div style={{display: 'none'}}>Mobile nav opener</div>
				<nav>
					<Ul>
						<Li>Home</Li>
						<Li>About</Li>
						<Li>Services</Li>
						<Li>Portfolio</Li>
						<Li>Contact</Li>
					</Ul>
				</nav>
			</Wrapper>
		</HeaderComponent>
	);
}

type HeaderProps = {
	fixed?: boolean;
};

const HeaderComponent = styled.header<HeaderProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  ${p => p.fixed && css`
	position: sticky;

	background-color: ${p => p.theme.backgroundVariant};
	border-bottom: 1px solid ${p => p.theme.borderVariant};

	top: -100px;
	transform: translateY(100px);
	transition: transform .5s;
  `}
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  display: inline;
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //flex-wrap: nowrap;

  padding-inline: 1em;
  margin-inline: auto;


  ${media.small`
  max-width: 600px;
  `}

  ${media.medium`
  max-width: 1024px;
  `}

  ${media.large`
  max-width: 1440px;
  `}

  ${media.xlarge`
  max-width: 1920px;
  `}
`;
