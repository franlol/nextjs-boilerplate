import React from 'react';

import Head from '../Head/Head';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import styles from './layout.module.scss';

import { Props } from './layout.types';

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Head />

      <div className={styles.container}>
        <Navbar />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </>
  );
}
