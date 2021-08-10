import styled, {css} from "styled-components";
import {useState} from "react";
import {Span} from "../Text";
import {Li, Ul} from "../List";
import {commonMaxWidthMedia} from "../../../styles/common";
import content from './Logo.svg';

export function Header() {
	const [fixed, setFixed] = useState<boolean>(false);
	return (
		<HeaderComponent fixed={fixed}>
			<Wrapper>
				<img src={content} height={48} width={48}/>
				<div style={{display: 'none'}}>Mobile nav opener</div>
				<nav>
					<Ul>
						<Li><Span active>Home</Span></Li>
						<Li><Span primary>About</Span></Li>
						<Li><Span primary>Services</Span></Li>
						<Li><Span primary>Portfolio</Span></Li>
						<Li><Span primary>Contact</Span></Li>
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

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //flex-wrap: nowrap;

  padding-inline: 1em;
  margin-inline: auto;

  ${commonMaxWidthMedia};
`;
