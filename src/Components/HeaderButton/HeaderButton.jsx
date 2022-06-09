import React from 'react'
import classes from './HeaderButton.module.scss'
import {NavLink} from 'react-router-dom'

const HeaderButton = function (props) {

    return (
        <div className={classes.HeaderButton}>
            <NavLink
                to={props.address}
                onClick={ props.renderAgain }
                className={(navData) => navData.isActive ? classes.active : null }
            >
                {props.text.toUpperCase()}
            </NavLink>
        </div>
    )
}

export default HeaderButton