import '../styles/globals.css'
import Head from 'next/dist/shared/lib/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
