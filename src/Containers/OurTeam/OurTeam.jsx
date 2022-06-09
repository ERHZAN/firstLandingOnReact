import React from 'react'
import classes from './OurTeam.module.scss'

const OurTeam = props => {
    return (
        <div className={classes.OurTeamDiv}>
            <div className={classes.OurTeamTextBlock}>
                <h1 className={classes.OurTeamHeading}>
                    Our team <div />
                </h1>
                <p className={classes.OurTeamParagraph}>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </p>
                <p className={classes.OurTeamParagraph}>
                    Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                    when an unknown printer took a galley
                    of type and scrambled it to make a type
                    specimen book.
                </p>
                <p className={classes.OurTeamParagraph}>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </p>
                <p className={classes.OurTeamParagraph}>
                    Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                    when an unknown printer took a galley
                    of type and scrambled it to make a type
                    specimen book
                </p>
            </div>
            <div className={classes.OurTeamExpertsDiv}>
                <div className={classes.OurTeamExpertsSinglePhoto}>
                    <div className={classes.ExpertPhotoMan}>
                        <h3 className={classes.ExpertPhotoHeader}>Name</h3>
                        <p className={classes.ExpertPhotoParagraph}>Designation</p>
                    </div>
                </div>
                <div className={classes.OurTeamExpertsColumnDiv}>
                    <div className={classes.ExpertPhotoWoman}>
                        <h3 className={classes.ExpertPhotoHeader}>Name</h3>
                        <p className={classes.ExpertPhotoParagraph}>Designation</p>
                    </div>
                    <div className={classes.ExpertPhotoWoman}>
                        <h3 className={classes.ExpertPhotoHeader}>Name</h3>
                        <p className={classes.ExpertPhotoParagraph}>Designation</p>
                    </div>
                </div>
                <div className={classes.OurTeamExpertsSinglePhoto}>
                    <div className={classes.ExpertPhotoMan}>
                        <h3 className={classes.ExpertPhotoHeader}>Name</h3>
                        <p className={classes.ExpertPhotoParagraph}>Designation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam