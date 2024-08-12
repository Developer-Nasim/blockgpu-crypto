import Tw from '/imgs/twitter.png'
import Xsol from '/imgs/x.png'
import Medium from '/imgs/medium.png'
import Teligram from '/imgs/teligram.png'
import LinkTag from './Linktag'

export default function SocialMedias() {
    return(
        <div className="social_medias">
            <LinkTag img={Tw}/> 
            <LinkTag img={Xsol}/> 
            <LinkTag img={Medium}/> 
            <LinkTag img={Teligram}/>
        </div>
    )
}