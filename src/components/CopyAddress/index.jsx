import styles from './style.module.css'

export default function CopyAddress() {
  return (
    <div className={styles.copyAddress}>
        <button type='button'>CA</button>
        <input type="text" value="0xD3F4E2eE5f54694290512b761c111249E4C53483" readOnly/>
    </div>
  )
}
