import styles from './style.module.css'  
import Heading from '../Heading'
import ProBlk from './ProBlk'

export default function Projections() {
  return (
    <section className={styles.projections_area}>
        <div className="container">
            <div className="row">  
                <div className="col-lg-8 offset-lg-2">
                    <div className="project-title">
                        <Heading><span>Market Growth Projections</span></Heading>
                        <p>The integration of gaming, blockchain, and AI through platforms like BlockGPU aligns perfectly with the projected growth in these sectors. The blockchain market is expected to expand to $94 billion by 2027, reflecting a significant opportunity for decentralized platforms. With 3.22 billion gamers worldwide, the potential user base is immense. The GPU market, crucial for both gaming and AI tasks, is anticipated to reach $773.07 billion by 2032. Additionally, the AI market is forecasted to grow to $667.96 billion by 2030. The esports industry is also projected to generate over $1.5 billion in revenue by 2025, highlighting the increasing popularity and economic impact of competitive gaming. BlockGPU is positioned at the intersection of these rapidly growing markets, offering gamers new financial opportunities through innovative technology.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ProBlk>
                        <h4>blockgpu ai</h4>
                        <p>Discover the potential of BlockGPU AI, where you can leverage your GPU for AI-driven tasks and earn up to $300 per month. This exciting feature is set to launch in Q1 2024, offering a unique opportunity to maximize your earnings by utilizing your gaming setup for advanced AI computations.</p>
                    </ProBlk>
                </div> 
                <div className="col-lg-6">
                    <ProBlk>
                        <h4>blockgpu miner</h4>
                        <p>Utilize the power of your gaming PC for cryptocurrency mining with BlockGPU Miner. Convert your computing power into Bitcoins, access new games, and earn gift cards effortlessly. Transform your gaming setup into a profitable asset today!</p>
                    </ProBlk>
                </div> 
            </div>
        </div>
    </section>
  )
}
