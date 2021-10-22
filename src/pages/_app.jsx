import '../styles/globals.css'
import Head from 'next/dist/shared/lib/head'
import { Layout } from 'src/components/Layout/Index'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>      
    </>
  )
}

export default MyApp
