import '../styles/globals.css'
import Head from 'next/dist/shared/lib/head'
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgColor } from 'src/hooks/useBgColor';

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

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
