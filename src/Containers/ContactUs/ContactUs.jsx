import React from 'react'
import classes from './ContactUs.module.scss'
import logo from '../../Imgs/ContactUs/Logo.svg'

const ContactUs = props => {
    const prevent = e => {
        e.preventDefault()
    }


    return (
        <div className={classes.ContactUsDiv}>
            <div className={classes.ContactUsLeftBlock}>
                <img src={logo} alt='' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                    magna aliqua.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incid
                    idunt ut labore et dolore magna aliqua.
                </p>
                <div className={classes.Contacts}>
                    <h3>
                        get support
                    </h3>
                    <p>
                        Mon-Fri: 9:00 AM – 6:00 PM
                    </p>
                    <div className={classes.Phone}>
                        <p>
                            +1 234 5678 9101
                        </p>
                    </div>
                    <div className={classes.Email}>
                        <p>
                            info@companyname.com
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.ContactUsRightBlock}>
                <h1>
                    Contact us <div />
                </h1>
                <form onSubmit={prevent}>
                    <input placeholder='Name' type='text' className={classes.inputName}></input>
                    <input placeholder='Email' type='email' className={classes.inputEmail}></input>
                    <input placeholder='Company' type='text' className={classes.inputCompany}></input>
                    <textarea placeholder='Your Message' className={classes.inputTextArea}></textarea>
                    <button type='submit' className={classes.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs