// import { IndexPage } from 'components';
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'layouts/Clean';
import { SEO, DemoContent } from 'components';

const UsingSSR = ({ serverData, location }) => {
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
        {serverData.message}
      </Layout>
    </>
  );
};
export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
