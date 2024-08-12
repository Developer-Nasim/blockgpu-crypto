import styles from './style.module.css'

export default function Heading({children}) {
  return (
    <h1 className={styles.heading}>{children}</h1>
  )
}
