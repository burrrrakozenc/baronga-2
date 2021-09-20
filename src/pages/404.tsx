import React from 'react';
import { Container } from 'theme-ui';
import SEO from '../components/seo';
import PrimaryLayout from '../components/layout/primary/primary';

const NotFoundPage: React.FC<{}> = () => (
	<PrimaryLayout>
		<SEO title="404: Not found" />
		<Container py="40px">
			<h1>Sayfayı Bulamadık :(</h1>
		</Container>
	</PrimaryLayout>
);

export default NotFoundPage;



