import React from 'react'
import classes from './Header.module.scss'
import Logo from '../../Imgs/Logo.svg'
import HeaderButton from '../../Components/HeaderButton/HeaderButton'
import {NavLink} from 'react-router-dom'

const Header = function(props) {

    return (
        <div className={classes.Header}>
            <div className={classes.HeaderItem}>
                <NavLink
                    to={'/'}
                    onClick={ props.renderAgain }
                >
                    <img src={Logo} alt=''></img>
                </NavLink>
            </div>
            <div className={classes.HeaderItem}>
                <HeaderButton
                    text={'home'}
                    address={'/'}
                    renderAgain={props.renderAgain}
                    page={'Home1'}
                />
                <HeaderButton
                    text={'who we are'}
                    address={'/who-we-are'}
                    renderAgain={props.renderAgain}
                    page={'WhoWeAre'}
                />
                <HeaderButton
                    text={'why us'}
                    address={'/why-us'}
                    renderAgain={props.renderAgain}
                    page={'WhyUs'}
                />
                <HeaderButton
                    text={'solutions'}
                    address={'/solutions'}
                    renderAgain={props.renderAgain}
                    page={'Solutions'}
                />
                <HeaderButton
                    text={'benefits'}
                    address={'/benefits'}
                    renderAgain={props.renderAgain}
                    page={'Benefits'}
                />
                <HeaderButton
                    text={'our team'}
                    address={'/our-team'}
                    renderAgain={props.renderAgain}
                    page={'OutTeam'}
                />
                <HeaderButton
                    text={'case study'}
                    address={'/case-study'}
                    renderAgain={props.renderAgain}
                    page={'CaseStudy'}
                />
                <HeaderButton
                    text={'certifications'}
                    address={'/certifications'}
                    renderAgain={props.renderAgain}
                    page={'Cerifications'}
                />
                <HeaderButton
                    text={'insights'}
                    address={'/insights'}
                    renderAgain={props.renderAgain}
                    page={'Insights'}
                />
                <HeaderButton
                    text={'contact us'}
                    address={'/contact-us'}
                    renderAgain={props.renderAgain}
                    page={'ContactUs'}
                />
            </div>
        </div>
    )
}

export default Header