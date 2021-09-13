import '../styles/globals.css'
import Head from 'next/dist/shared/lib/head'
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  )
}

export default MyApp
