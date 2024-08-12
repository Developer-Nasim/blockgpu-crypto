import Header from './components/header'
import Hero from './components/hero'
import Features from './components/features'
import ContentSection from './components/ContentSection'
import Heading from './components/Heading'
import Projections from './components/Projections'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

import Btn from './components/Btn'
import TBg from '/imgs/topbg.png'
import Bg from '/imgs/img.png'
import Bg2 from '/imgs/img2.png'

function App() { 

  return (
    <>
    <img src={TBg} className='topBg' alt="" />
      <Header/>
      <Hero/>
      <Features/>
      <ContentSection img={Bg}>
          <Heading>what is block<span>gpu</span></Heading>
          <p>BlockGPU is a decentralized platform designed for gamers to monetize their gaming PCs by sharing GPU power for AI-driven tasks and cryptocurrency mining. This innovative ecosystem seamlessly integrates gaming and blockchain technology, creating new financial opportunities for gamers. By leveraging idle GPU power, BlockGPU allows users to participate in advanced AI computations and crypto mining, offering a unique blend of entertainment and income generation. This convergence of gaming and blockchain opens up exciting possibilities, transforming gaming rigs into powerful tools for financial gain.</p>
          <Btn txt={"whitepaper"} href={"#"}/>
      </ContentSection> 
      <Projections /> 
      <ContentSection img={Bg2}>
          <Heading>what makes block<span>gpu</span> unique?</Heading>
          <p>BlockGPU’s platform comprises a desktop application, web platform, and mobile app, designed to reward users for sharing excess computing power. While resource-intensive games typically use only about 15% of a computer’s power, BlockGPU enables users to monetize the remaining 85%. By downloading and running the application in the background, users can earn between 93% and 100% of mining rewards. The more the app is utilized, the higher the payout, providing an efficient and profitable way to leverage idle computing power.</p>
          <ul>
            <li>• ERC-20 Token</li>
            <li>• Fixed supply of 100,000,000 tokens</li>
            <li>• Locked liquidity on Unicrypt</li>
            <li>• Staking rewards through the dAPP</li>
          </ul> 
      </ContentSection>
      <Roadmap />
      <Footer />
    </>
  )
}

export default App
