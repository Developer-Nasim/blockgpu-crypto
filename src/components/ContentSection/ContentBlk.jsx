import Heading from '../Heading'
import styles from './style.module.css'  

export default function ContentBlk({children,...rest}) {
  return (
  <div className={styles.contenteBlk} {...rest}>
      {children}  
  </div>
  )
}
