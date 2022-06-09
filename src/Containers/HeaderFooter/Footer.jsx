import React from 'react'
import classes from './Footer.module.scss'
import Logo1 from '../../Imgs/Footer/Facebook.svg'
import Logo2 from '../../Imgs/Footer/Instagram.svg'
import Logo3 from '../../Imgs/Footer/LinkedIn.svg'
import Logo4 from '../../Imgs/Footer/Twitter.svg'

const Footer = props => {

    const prevent = e => {
        e.preventDefault()
    }

    return (
        <div className={classes.FooterDiv}>
            <div className={classes.FooterCopyright}>
                <p className={classes.FooterParagraph}>
                    &copy; Copyright 2022 | Theme by SYSTEM PVT LTD | All Rights Reserved | Powered by SYSTEM
                </p>
            </div>
            <div className={classes.FooterIcons}>
                <a onClick={ prevent } href='/'>
                    <img alt='' src={ Logo1 } />
                </a>
                <a onClick={ prevent } href='/'>
                    <img alt='' src={ Logo2 } />
                </a>
                <a onClick={ prevent } href='/'>
                    <img alt='' src={ Logo3 } />
                </a>
                <a onClick={ prevent } href='/'>
                    <img alt='' src={ Logo4 } />
                </a>
            </div>
        </div>
    )
}

export default Footer