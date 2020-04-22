import React, { Component } from 'react'

import Form from '../Form/Form'
import './Header.css'


class Header extends Component {
    render() {
        return(
            <div className='header'>
                <div className='header-logo'></div>
                <h1 className='header-title'>CREATE YOUR FILM LIST!</h1>
                <div className='header-Form'>
                    <Form />
                </div>
            </div>
        )
    }
}

export default Header