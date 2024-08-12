import styles from './style.module.css'
import SocialMedias from '../SocialMedias' 

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.footer_wrap}>
                        <h5> 0xD3F4E2eE5f54694290512b761c111249E4C53483 </h5> 
                        <SocialMedias />
                        <p>2024 BlockGPU AI. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
