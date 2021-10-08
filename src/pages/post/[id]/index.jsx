import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { Header } from 'src/components/Header'
import styles from 'src/styles/Home.module.css'

const PostId = () => {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <div>{router.query.id}</div>
    </div>
  )
}

export default PostId;