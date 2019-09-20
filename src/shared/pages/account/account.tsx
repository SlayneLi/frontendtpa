import React, { Component } from 'react'
import ToggleButton from 'react-toggle-button'
import './account.scss'

export default class Account extends Component {
    state = {
        value: false,
    }
    
    render() {
        return (
            <div>
                <div className="account-container">
                    <div className="account-title">
                        User Account
                    </div>
                    <div className="account-content">
                        <div className="left-content">
                            <div className="content">
                                ASD
                            </div>
                        </div>
                        <div className="vr">
                            <hr/>
                        </div>
                        <div className="right-content">
                            asd
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}