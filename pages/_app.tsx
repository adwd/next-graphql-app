import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="/speedcurve-lux.js"></script>
          <script
            src="https://cdn.speedcurve.com/js/lux.js?id=512610003"
            async
            defer
            crossOrigin="anonymous"
          ></script>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
