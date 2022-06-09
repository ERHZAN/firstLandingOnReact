import React from 'react'
import classes from'./Benefits.module.scss'
import Logo1 from '../../Imgs/BenefitsCards/Card1.svg'
import Logo2 from '../../Imgs/BenefitsCards/Card2.svg'
import Logo3 from '../../Imgs/BenefitsCards/Card3.svg'
import Logo4 from '../../Imgs/BenefitsCards/Card4.svg'
import Logo5 from '../../Imgs/BenefitsCards/Card5.svg'
import Logo6 from '../../Imgs/BenefitsCards/Card6.svg'

const Benefits = props => {
    const prevent = e => {
        e.preventDefault()
    }

    return (
        <div className={classes.BenefitsDiv}>
            <h1 className={classes.BenefitsHeading}>
                Benefits<div></div>
            </h1>
            <div className={classes.BenefitsCardsDiv}>
                <div className={classes.BenefitsCard}>
                    <img className={classes.BenefitsCardImg} src={ Logo1 } alt=''></img>
                    <h1 className={classes.BenefitsCardHeading}>Heading</h1>
                    <p className={classes.BenefitsCardParagraph}>
                        Lorem Ipsum is
                        simply dummy
                        text of the
                    </p>
                </div>
                <div className={classes.BenefitsCard}>
                    <img className={classes.BenefitsCardImg} src={ Logo2 } alt=''></img>
                    <h1 className={classes.BenefitsCardHeading}>Heading</h1>
                    <p className={classes.BenefitsCardParagraph}>
                        Lorem Ipsum is
                        simply dummy
                        text of the
                    </p>
                </div>
                <div className={classes.BenefitsCard}>
                    <img className={classes.BenefitsCardImg} src={ Logo3 } alt=''></img>
                    <h1 className={classes.BenefitsCardHeading}>Heading</h1>
                    <p className={classes.BenefitsCardParagraph}>
                        Lorem Ipsum is
                        simply dummy
                        text of the
                    </p>
                </div>
                <div className={classes.BenefitsCard}>
                    <img className={classes.BenefitsCardImg} src={ Logo4 } alt=''></img>
                    <h1 className={classes.BenefitsCardHeading}>Heading</h1>
                    <p className={classes.BenefitsCardParagraph}>
                        Lorem Ipsum is
                        simply dummy
                        text of the
                    </p>
                </div>
                <div className={classes.BenefitsCard}>
                    <img className={classes.BenefitsCardImg} src={ Logo5 } alt=''></img>
                    <h1 className={classes.BenefitsCardHeading}>Heading</h1>
                    <p className={classes.BenefitsCardParagraph}>
                        Lorem Ipsum is
                        simply dummy
                        text of the
                    </p>
                </div>
                <div className={classes.BenefitsCard}>
                    <img className={classes.BenefitsCardImg} src={ Logo6 } alt=''></img>
                    <h1 className={classes.BenefitsCardHeading}>Heading</h1>
                    <p className={classes.BenefitsCardParagraph}>
                        Lorem Ipsum is
                        simply dummy
                        text of the
                    </p>
                </div>
            </div>
            <p className={classes.BenefitsBottomParagraph}>
                71% of online customers expect a response
                within of 5 minutes of reaching out to a company. 
                Companyname can make this happen for your business.
            </p>
            <a
                onClick={ prevent }
                className={classes.BenefitsBottomButton}
                href='/'
            >
                Learn more
            </a>
        </div>
    )
}

export default Benefits