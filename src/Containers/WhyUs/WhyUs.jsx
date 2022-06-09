import React from 'react'
import classes from './WhyUs.module.scss'

const WhyUs = props => {
    return (
        <div className={classes.WhyUsDiv}>
            <div className={classes.WhyUsLeftSide}>
                <h1>Why us<div></div></h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                </p>
            </div>
            <div className={classes.WhyUsRightSide}>
                <div className={classes.rightImageWhyUsPage} />
            </div>
        </div>
    )
}

export default WhyUs