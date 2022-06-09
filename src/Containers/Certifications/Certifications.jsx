import React from 'react'
import classes from './Certifications.module.scss'
import Icon from '../../Imgs/Certifications/CertifIcon.svg'

const Certifications = props => {
    return (
        <div className={classes.Certifications}>
            <h1 className={classes.CertificationsHeading}>
                Certifications <div />
            </h1>
            <div className={classes.CertificationIcons}>
                <img alt='' src={Icon} />
                <img alt='' src={Icon} />
                <img alt='' src={Icon} />
                <img alt='' src={Icon} />
                <img alt='' src={Icon} />
                <img alt='' src={Icon} />
            </div>
        </div>
    )
}

export default Certifications