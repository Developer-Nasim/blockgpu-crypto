import styles from './style.module.css'  

export default function FeatureBlk({img,children}) {
  return (
  <div className={styles.featureBlk}>
      <img src={img} alt="" />
      <div>
        {children}
      </div>      
  </div>
  )
}
