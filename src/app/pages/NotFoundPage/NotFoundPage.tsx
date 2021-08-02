import { Link } from "react-router-dom";
import styled from "styled-components";

export function NotFoundPage() {
	return (
		<>
			<Wrapper>
				<Title>
					404
					<p>Page not found.</p>
				</Title>
				<Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 3.375rem;

  p {
	font-size: 3.125rem;
  }
`;
