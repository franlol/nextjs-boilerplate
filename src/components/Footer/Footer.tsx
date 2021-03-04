import React from 'react';

import styles from './footer.module.scss';

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </footer>
  )
}
