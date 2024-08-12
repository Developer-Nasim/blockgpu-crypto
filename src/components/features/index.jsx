import styles from './style.module.css' 
import FeatureBlk from './FeatureBlk'
import Icon from '/imgs/icon.png'
import Icon2 from '/imgs/icon2.png'
import Icon3 from '/imgs/icon3.png'

export default function Features() {
  return (
    <section className={styles.features_area}>
        <div className="container">
            <div className="row">  
                <div className="col-lg-4">
                    <FeatureBlk img={Icon}>
                        <h4>Unlock New Earning Potential</h4>
                        <p>Maximize the potential of your gaming rig with BlockGPU, an innovative platform that fuses GameFi, distributed computing, and AI, opening new avenues for earnings in the gaming and blockchain world.</p>
                    </FeatureBlk>
                </div>
                <div className="col-lg-4">
                    <FeatureBlk img={Icon2}>
                        <h4>Harness GPU Potential</h4>
                        <p>Maximize the potential of your gaming rig with BlockGPU, an innovative platform that fuses GameFi, distributed computing, and AI, opening new avenues for earnings in the gaming and blockchain world.</p>
                    </FeatureBlk>
                </div>
                <div className="col-lg-4">
                    <FeatureBlk img={Icon3}>
                        <h4>Fully Customizable</h4>
                        <p>Maximize the potential of your gaming rig with BlockGPU, an innovative platform that fuses GameFi, distributed computing, and AI, opening new avenues for earnings in the gaming and blockchain world.</p>
                    </FeatureBlk>
                </div>
            </div>
        </div>
    </section>
  )
}
