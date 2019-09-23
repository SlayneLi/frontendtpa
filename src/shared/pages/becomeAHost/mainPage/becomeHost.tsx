import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './becomeHost.scss';

class BecomeHost extends Component<any,any> {
    render() {
        return (
            <div className="become-host-container">
                <hr/>
                <div className="content-container">
                    <div className="left-container">
                        <div className="welcome-sec">
                            Welcome, {this.props.firstname} !
                        </div>
                        <div className="excitement-sec">
                            We're excited to learn about what you'd like to host on TPA Web with Gopher
                        </div>
                        <div className="reminder-sec">
                            In just a few minutes, you’ll start to create your own host page, then you’ll submit it to be reviewed by TPA Web with Gopher.
                        </div>
                        <div className="buttons">
                            <div className="become-exp-host">
                                <Link to={"/become-experience-host/"}>
                                    <div className="exp-button">
                                        Become an Experience Host !
                                    </div>
                                </Link>
                            </div>
                            <div className="become-place-host">
                                <Link to={"/become-place-host/"}>
                                    <div className="place-button">
                                        Become a Place Host !
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <img src="https://a0.muscache.com/pictures/fa546cb5-beea-4427-8af3-5b0c0efa00ee.jpg" alt=""/>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname,
        rates: state.rates,
        currency: state.currency,
    }
}

export default connect(mapStateToProps)(BecomeHost);