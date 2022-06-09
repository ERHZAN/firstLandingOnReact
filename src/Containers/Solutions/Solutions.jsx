import React from 'react'
import classes from './Solutions.module.scss'
import logo1 from '../../Imgs/Cards/contact center card.svg'
import logo2 from '../../Imgs/Cards/omni channel.svg'
import logo3 from '../../Imgs/Cards/analytics.svg'

const Solutions = () => {

    const prevent = e => {
        e.preventDefault()
    }

    return (
        <div className={classes.SolutionsDiv}>
            <div className={classes.SolutionsHeaderDiv}>
                <h1 className={classes.SolutionsHeading}>
                    Solutions <div />
                </h1>
            </div>
            <div className={classes.SolutionsCards}>
                <div className={classes.SolutionCard}>
                    <div className={classes.SolutionCardImg}>
                        <img src={logo1} alt=''></img>
                    </div>
                    <h2>Contact center</h2>
                    <p>
                        Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry.
                    </p>
                    <a onClick={ prevent } href='/'>
                        Learn more
                    </a>
                </div>
                <div className={classes.SolutionCard}>
                    <div className={classes.SolutionCardImg}>
                        <img src={logo2} alt=''></img>
                    </div>
                    <h2>Omni channel</h2>
                    <p>
                        Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry.
                    </p>
                    <a onClick={ prevent } href='/'>
                        Learn more
                    </a>
                </div>
                <div className={classes.SolutionCard}>
                    <div className={classes.SolutionCardImg}>
                        <img src={logo3} alt=''></img>
                    </div>
                    <h2>Analytics</h2>
                    <p>
                        Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry. 
                    </p>
                    <a onClick={ prevent } href='/'>
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Solutions