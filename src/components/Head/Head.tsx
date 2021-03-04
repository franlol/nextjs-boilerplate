import React from 'react';
import Head from 'next/head';
import { EHead, Props } from './head.types';

export default function HeadComponent(props: Props) {
  const { title } = props

  return (
    <Head>
      <title>{title || EHead.TITLE}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
