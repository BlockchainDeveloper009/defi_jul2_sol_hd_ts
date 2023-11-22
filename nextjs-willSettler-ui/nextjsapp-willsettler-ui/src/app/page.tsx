import Image from 'next/image'
import styles from './page.module.css'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { Component } from 'react';

// const theme = createTheme({
//   /** Put your mantine theme override here */
// });

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
     <Component {...pageProps} />
  </MantineProvider>
  )
}
