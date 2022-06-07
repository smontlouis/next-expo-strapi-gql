// causing webpack issue
import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import 'raf/polyfill'
import React from 'react'
import { SolitoAppProps } from 'solito'

function MyApp({
  Component,
  pageProps,
}: SolitoAppProps & {
  // temp fix
  Component: any
}) {
  const [theme, setTheme] = useRootTheme()

  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        <Provider disableRootThemeClass defaultTheme={theme}>
          <Component {...pageProps} />
        </Provider>
      </NextThemeProvider>
    </>
  )
}

export default MyApp
