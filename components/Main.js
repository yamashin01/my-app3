import { Headline } from '../components/Headline'
import styles from '../components/Main.module.css'
import { Links } from './Links'

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
