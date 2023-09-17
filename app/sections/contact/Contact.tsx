import {useActionData, useNavigate, useNavigation} from '@remix-run/react';
import {withZod} from '@remix-validated-form/with-zod';
import {useState} from 'react';
import {ValidatedForm} from 'remix-validated-form';
import {z} from 'zod';
import {Button} from '~/components/button';
import {FormInput, FormTextarea} from '~/components/Form';
import {Col, Container, Row} from '~/components/grid';
import {Section} from '~/components/section';
import {H2} from 'app/components/text';
import {action} from '~/routes/_index';
import {ContactSectionInfo} from '~/sections/sectionConstants';
import backgroundImage from './background.jpg';

type ContactFormData = {
	name: string;
	email: string;
	subject: string;
	content: string;
}

const contactSchema: z.ZodType<ContactFormData> = z.object({
	name: z.string(),
	email: z.string().email(),
	subject: z.string(),
	content: z.string(),
});

export const contactFormSchema = withZod(contactSchema);


export function ContactSection() {
	const {state} = useNavigation();
	const actionData = useActionData<typeof action>();

	return (
		<Section id={ContactSectionInfo.id} backgroundImage={backgroundImage}>
			{/** https://unsplash.com/photos/q8U1YgBaRQk */}
			<Container id="contact">
				<H2 primary>{ContactSectionInfo.text}</H2>
				<ValidatedForm<ContactFormData, undefined> validator={contactFormSchema}
				                                           defaultValues={{
					                                           name: '',
					                                           email: '',
					                                           subject: '',
					                                           content: '',
				                                           }}
				                                           method="post"
				>
					<Row>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
							<FormInput name="name" label="Name" required/>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
							<FormInput name="email" label="E-Mail" type="email" required/>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
							<FormInput name="subject" label="Subject" required/>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
							<FormTextarea
								name="content"
								label="Your message"
								rows={5}
								required
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
							<Button primary disabled={state === 'submitting' || actionData?.ok} isLoading={state === 'submitting'} type="submit">
								{actionData ? actionData.message : 'Send Message'}
							</Button>
						</Col>
					</Row>
				</ValidatedForm>
			</Container>
		</Section>
	);
}
