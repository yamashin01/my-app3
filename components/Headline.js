import styles from '../components/Headline.module.css'

export function Headline(props) {
    console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
    )
}
