import React, { Component } from 'react'
import ToggleButton from 'react-toggle-button'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import './account.scss'

export default class Account extends Component {
    state = {
        value: false,
    }
    
    responseFacebook = (response:any) => {
        console.log(response);
    }

    responseGoogle = (response:any) => {
        console.log(response);
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
                                <div className="google">
                                <GoogleLogin
                                    clientId="628937983313-n2he028l8gj3fro1jqrnmgt5619meou5.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle.bind(this)}
                                    onFailure={this.responseGoogle.bind(this)}
                                    cookiePolicy={'single_host_origin'}
                                />
                                </div>
                                <div className="facebook">
                                <FacebookLogin
                                    appId="2481643268722752"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    callback={this.responseFacebook.bind(this)}
                                    cssClass="my-facebook-button-class"
                                    icon="fa-facebook"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="vr">
                            <hr/>
                        </div>
                        <div className="right-content">
                            <img src="https://static.zerochan.net/BB.%28Fate.EXTRA%29.full.2305851.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}