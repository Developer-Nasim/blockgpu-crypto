import styles from './style.module.css'
import CopyAddress from '../CopyAddress'
import Heading from '../Heading'

export default function Hero() {
  return (
    <section className={styles.hero_area}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className={styles.hero_wrap}>
                        <Heading>
                            UNLEASH THE
                            FULL POTENTIAL
                            WITH BLOCK<span>GPU</span>
                        </Heading> 
                        <CopyAddress/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
