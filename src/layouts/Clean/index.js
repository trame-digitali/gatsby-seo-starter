import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import useDocumentDimensions from "helpers/useDocumentDimensions";
import Header from 'components/Header';
import Footer from 'components/Footer';
// import storageAvailable from "helpers/storageAvailable";

const Layout = ({ children, location }) => {
  const ref = useRef(null);
  const footerRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    if (headerRef && headerRef.current) {
      const element = headerRef.current;
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    const footer = footerRef.current;
  });

  return (
    // <div className="flex w-screen flex-col mx-auto" ref={ref}>
    <>
      <Header ref={headerRef} />
      <main className="flex-1 mx-auto w-screen " ref={ref}>
        {children}
      </main>
      <Footer ref={footerRef} />
    </>
    // </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
