/*
 *
 * HomePage
 *
 */

import React from 'react';
import { Layout, BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';

const HomePage: React.FunctionComponent = () => {
  return (
    <Layout>
      <BaseHeaderLayout
        title="Content Builder"
        subtitle="Build your web pages fast with the cutting-edge GraphesJS Visual Editor"
      ></BaseHeaderLayout>
      <ContentLayout>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
