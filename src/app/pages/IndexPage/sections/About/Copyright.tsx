import {Span} from "../../../../components/Text";
import styled from "styled-components";

export function CopyrightSection() {
	return (
		<Footer>
			<Span primary>© Seikatsu - All Rights Reserved.</Span>
		</Footer>
	);
}

const Footer = styled.footer`
  padding-block: 50px;
  text-align: center;
`;