import React from 'react'
import classes from './Layout.module.scss'
import Header from '../Containers/HeaderFooter/Header'
import Footer from '../Containers/HeaderFooter/Footer'

const Layout = props => {
        const cls = [
            classes.mainBody,
        ]

        const homePage = localStorage.getItem('page')


        if (window.location.pathname === '/') {
            if (homePage === 'Home1') {
                cls.push(classes.MainHome1)
            } else if (homePage === 'Home2' || homePage == null) {
                cls.push(classes.MainHome2)
            } else if (homePage === 'Home3') {
                cls.push(classes.MainHome3)
            }
        } else if (window.location.pathname === '/who-we-are') {
            cls.push(classes.MainWhoWeAre)
        } else if (window.location.pathname === '/why-us') {
            cls.push(classes.MainWhyUs)
        } else if (window.location.pathname === '/solutions') {
            cls.push(classes.MainSolutions)
        } else if (window.location.pathname === '/benefits') {
            cls.push(classes.MainBenefits)
        } else if (window.location.pathname === '/our-team') {
            cls.push(classes.MainOurTeam)
        } else if (window.location.pathname === '/case-study') {
            cls.push(classes.MainCaseStudy)
        } else if (window.location.pathname === '/certifications') {
            cls.push(classes.MainCertifications)
        } else if (window.location.pathname === '/insights') {
            cls.push(classes.MainInsights)
        } else if (window.location.pathname === '/contact-us') {
            cls.push(classes.MainContactUs)
        }

        return (
            <>
                <Header renderAgain={props.renderAgain} />
                <main className={cls.join(' ')} >
                    <div className={classes.Container}>
                        {props.children}
                    </div>
                </main>
                <Footer />
            </>
        )
}

export default Layout