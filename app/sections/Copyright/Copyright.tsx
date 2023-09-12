import {Span} from "../../components/Text";
import styled from "styled-components";

export function CopyrightSection() {
	return (
		<Footer>
			<Span primary>© Maximilian Pluskat - All Rights Reserved.</Span>
		</Footer>
	);
}

const Footer = styled.footer`
  padding-block: 25px;
  text-align: center;
`;
