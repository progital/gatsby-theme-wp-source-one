import React from 'react';
import { Styled } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/layout-seo';

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }}>
    <SEO title="404: Not found" />
    <Styled.h1>NOT FOUND</Styled.h1>
    <Styled.p>The requested page does not exist.</Styled.p>
  </Layout>
);

export default NotFoundPage;
