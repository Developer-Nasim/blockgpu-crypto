import styles from './style.module.css'  
import Heading from '../Heading' 
import ProBlk from "../Projections/ProBlk"

export default function Roadmap() {
  return (
    <section className={styles.roadmap_area}>
        <div className="container">
            <div className="row">  
                <div className="col-lg-6">
                    <div className={styles.roadmap_title}>
                        <Heading><span>BLOCKGPU</span> Roadmap</Heading> 
                    </div>
                    <div className={styles.all_content_block}> 
                        <ProBlk>
                            <h4>Phase 1:</h4>
                            <h5>Initial Launch and Token Distribution</h5>
                            <p>Token Creation: The $BGPU token is created as an ERC-20 token, following Ethereum’s smart contract specifications. The token code is developed by an experienced solidity developer and will be verified and accessible to everyone on Etherscan.</p>

                            <ul>
                                <li>- Socials creation</li>
                                <li>- Website creation</li>
                                <li>- CA verification</li>
                                <li>- LP lock</li>
                                <li>- Renounce Ownership</li>
                            </ul>

                            <p>Locked Liquidity: The BlockGPU team partners with Unicrypt, a decentralized liquidity-locking solution, to ensure liquidity for the $BGPU token. The liquidity is locked, and the details can be verified for transparency.</p>
                             
                        </ProBlk>
                        <ProBlk>
                            <h4>Phase 2:</h4>
                            <h5>Development and Expansion</h5> 
 
                            <ul>
                                <li>– BGPU UI: Development and refinement of the user interface</li>
                                <li>– User Dashboard: Implementation of a comprehensive dashboard for user interactions</li>
                                <li>– BGPU Core Features: Enhancements to core platform functionalities</li>
                                <li>– BGPU Wallet: Integration of the BGPU wallet for managing digital assets</li>
                                <li>– BGPU History: Creation of a detailed transaction history feature</li>
                                <li>– BGPU Statistics & Settings: Introduction of statistical insights and customizable settings for users</li>
                            </ul>
 
                        </ProBlk>
                    </div>
                </div>
                <div className="col-lg-6"> 
                    <div className={styles.all_content_block}> 
                        <ProBlk>
                            <h4>Phase 3:</h4>
                            <h5>Ecosystem Growth and Adoption </h5> 
                             
                            <ul className={styles.allPhase}>
                                <li>– BGPU AI App v1</li>
                                <li>– Initial release of the AI application for utilizing GPU power for AI-driven tasks.</li>
                                <li>– BGPU Staking on Ethereum</li>
                                <li>– Introduction of staking mechanisms on the Ethereum blockchain for enhanced user rewards.</li>
                                <li>– AI Strategic Partnerships</li>
                                <li>– Formation of strategic partnerships with AI-focused companies to expand the platform’s capabilities.</li>
                            </ul>
 
                        </ProBlk>
                        <ProBlk>
                            <h4>Phase 4:</h4>
                            <h5>Ecosystem Growth and Adoption</h5>  
                            <ul className={styles.allPhase}>
                                <li>BGPU AI App v3 Release <br /> – Launch of the third version of the AI app to enhance user experience and functionality.</li>
                                <li>BGPU Dapp v2 Release<br /> – Deployment of the second version of the decentralized application for improved features and performance.</li>
                                <li>BNB Bridge<br /> – Integration of a bridge for Binance Coin (BNB) to facilitate cross-chain transactions.</li>
                                <li>BNB Staking Release<br /> – Introduction of BNB staking to allow users to earn rewards by staking their BNB tokens.</li>
                                <li>ARweave Integration<br /> – Incorporation of ARweave for decentralized data storage solutions. <br />– Layer0 integration</li>
                                <li>CEX Listings<br /> – Listing of Block GPU tokens on centralized exchanges to increase accessibility and liquidity.</li>
                            </ul> 
                        </ProBlk>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}
