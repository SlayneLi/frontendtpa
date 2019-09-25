import React, { Component } from 'react'
import './login-history.scss'

export default class LoginHistory extends Component<any,any> {
    render() {
        return (
            <div className="history-outer">
                <div className="login-history-container">
                    <div className="favicon-device">
                        <i className="fas fa-desktop"></i>
                    </div>
                    <div className="credentials">
                        <div className="location">
                            {this.props.location}
                        </div>
                        <div className="login-time">
                            {this.props.login}
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
