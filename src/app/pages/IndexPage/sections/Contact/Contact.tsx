import { Button } from "../../../../components/Button";
import { Form, FormInput, FormTextarea } from "../../../../components/Form";
import { Container, Row, Col } from "../../../../components/Grid";
import { H2 } from "../../../../components/Text";
import { Section } from "../components/Section";
import backgroundImage from "./background.jpg";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  subject: Yup.string().required(),
  content: Yup.string().required(),
});

export function ContactSection() {
  return (
    <Section backgroundImage={backgroundImage}>
      {/** https://unsplash.com/photos/q8U1YgBaRQk */}
      <Container>
        <H2 primary>Contact Me</H2>
        <Form
          initialValues={{
            name: "",
            email: "",
            subject: "",
            content: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}
        >
          <Row>
            <Col columnSize={1}>
              <FormInput name="name" label="Name" required />
            </Col>
            <Col columnSize={1}>
              <FormInput name="email" label="E-Mail" type="email" required />
            </Col>
          </Row>
          <Row>
            <Col columnSize={1}>
              <FormInput name="subject" label="Subject" required />
            </Col>
          </Row>
          <Row>
            <Col columnSize={1}>
              <FormTextarea
                name="content"
                label="Your message"
                rows={5}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col columnSize={1}>
              <Button primary type="submit">
                Send message
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Section>
  );
}
