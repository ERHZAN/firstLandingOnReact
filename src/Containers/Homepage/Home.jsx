import React from 'react'
import classes from './Home.module.scss'

const Home = props => {

    let bottomFirstButton
    const homePage = localStorage.getItem('page')

    if (homePage === 'Home1') {
        bottomFirstButton = `${classes.sliderBtn} ${classes.active}`
    } else {
        bottomFirstButton = `${classes.sliderBtn} ${classes.notActive}`
    }

    let bottomSecondButton
    if (homePage === 'Home2') {
        bottomSecondButton = `${classes.sliderBtn} ${classes.active}`
    } else if (homePage == null || homePage === undefined) {
        bottomSecondButton = `${classes.sliderBtn} ${classes.active}`
    } else {
        bottomSecondButton = `${classes.sliderBtn} ${classes.notActive}`
    }

    let bottomThirdButton
    if (homePage === 'Home3') {
        bottomThirdButton = `${classes.sliderBtn} ${classes.active}`
    } else {
        bottomThirdButton = `${classes.sliderBtn} ${classes.notActive}`
    }

    return (
        <div className={classes.Homepage}>
            <h1 className={classes.HomepageHeader}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h1>
            <button type='button'>
                Request for more information
            </button>
            <div className={classes.SliderBtnsFlex}>
                <div className={classes.sliderBtns}>
                    <div
                        className={bottomFirstButton}
                        onClick={() => { props.changePage('Home1') }}
                    />
                    <div
                        className={bottomSecondButton}
                        onClick={() => { props.changePage('Home2') }}
                    />
                    <div
                        className={bottomThirdButton}
                        onClick={() => { props.changePage('Home3') }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home