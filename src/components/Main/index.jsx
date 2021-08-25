import { Headline } from 'src/components/Headline'
import styles from './Main.module.css'
import { Links } from 'src/components/Links'

export default function Main(props) {
  return (
      <main className={styles.main}>
        <Headline page={props.page} >
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>

        <Links />

      </main>
  )
}
