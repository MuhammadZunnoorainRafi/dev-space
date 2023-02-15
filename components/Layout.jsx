import Head from 'next/head';
import { useState } from 'react';
import Navbar from './Navbar';

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <Navbar />

        <div className=" max-w-6xl mx-auto px-2">{children}</div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Dev-Space',
  description: 'code war begins',
};

export default Layout;
