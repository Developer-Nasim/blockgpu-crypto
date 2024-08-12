import React from 'react'
import Logo from '/imgs/logo.png'
import Logo2 from '/imgs/logo2.png'

import LinkTag from '../Linktag'

import styles from './style.module.css'
import SocialMedias from '../SocialMedias'

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className={styles.flogo}>
                        <LinkTag img={Logo}/> 
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.logo}>
                        <LinkTag img={Logo2}/>  
                    </div>
                </div>
                <div className="col-lg-4">
                    <SocialMedias/>
                </div>
            </div>
        </div>
    </header>
  )
}
