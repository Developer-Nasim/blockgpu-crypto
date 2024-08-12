import styles from './style.module.css'  

export default function ProBlk({children,...rest}) {
  return (
  <div className={styles.ProBlk} {...rest}>
    {children}
  </div>
  )
}
