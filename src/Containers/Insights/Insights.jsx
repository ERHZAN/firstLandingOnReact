import React from 'react'
import classes from'./Insights.module.scss'

const Insights = props => {
    const prevent = e => {
        e.preventDefault()
    }

    return (
        <div className={classes.InsightsDiv}>
            <h1 className={classes.InsightsHeading}>
                Insights <div />
            </h1>
            <div className={classes.InsightsBlock}>
                <div className={classes.InsightsTop}>
                    <div className={classes.Insight1}>
                        <h3 className={classes.FirstInsightHeading}>
                            Heading
                        </h3>
                        <p className={classes.FirstInsightParagraph}>
                            Lorem Ipsum is
                            simply dummy
                            text of the
                        </p>
                        <a
                            href='/'
                            onClick={prevent}
                            className={classes.FirstInsightLink}
                        >
                            Read Article
                        </a>
                    </div>
                    <div className={classes.Insight2}>
                        
                    </div>
                    <div className={classes.Insight3}>
                        
                    </div>
                </div>
                <div className={classes.InsightsBottom}>
                    <div className={classes.Insight4}>
                        
                    </div>
                    <div className={classes.Insight5}>
                        
                    </div>
                    <div className={classes.Insight6}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insights