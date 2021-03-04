import React from 'react';

import styles from './main.module.scss';

import { Props } from './main.types';

export default function Main(props: Props) {
  const { children } = props;

  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}
