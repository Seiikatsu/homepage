import { Button } from "../../../../components/Button";
import { Form, FormInput, FormTextarea } from "../../../../components/Form";
import { Container, Row, Col } from "../../../../components/Grid";
import { H2 } from "../../../../components/Text";
import { Section } from "../../components/Section";
import backgroundImage from "./background.jpg";
import * as Yup from "yup";
import { sanitize } from "dompurify";
import axios from "axios";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  subject: Yup.string().required(),
  content: Yup.string().required(),
});

export function ContactSection() {
  const [submitText, setSubmitText] = useState<string>('Send Message');
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  return (
    <Section backgroundImage={backgroundImage}>
      {/** https://unsplash.com/photos/q8U1YgBaRQk */}
      <Container id="contact">
        <H2 primary>Contact Me</H2>
        <Form
          initialValues={{
            name: "",
            email: "",
            subject: "",
            content: "",
          }}
          onSubmit={async (values, actions) => {
            const data = {
              name: sanitize(values.name),
              email: sanitize(values.email),
              subject: sanitize(values.subject),
              content: sanitize(values.content),
            };
            setSubmitting(true);
            await axios
              .put("https://email-relay.seikatsu.io/email/send", data, {
                headers: {
                  'X-Host': 'seikatsu.io'
                }
              })
              .then(() => setSubmitText('Success!'))
              .catch(() => setSubmitText('Please try again later.'))
              .finally(() => {
                setDisableSubmit(true);
                setSubmitting(false);
                actions.setSubmitting(false);
              });
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
              <Button primary disabled={disableSubmit} loading={submitting} type="submit">
                {submitText}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Section>
  );
}
