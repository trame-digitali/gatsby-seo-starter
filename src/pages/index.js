// import { IndexPage } from 'components';
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'layouts/Clean';
import { SEO, DemoContent } from 'components';

const IndexPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <SEO
          keywords={['Trame Digitali']}
          title="Trame Digitali"
          titleTemplate="%s"
          description="Index di nn nuovo sito di trame digitali"
          location={location}
        />

        <DemoContent />
      </Layout>
    </>
  );
};
export default IndexPage;
