import React from 'react';
import "./footer.scss";
import facebookImg from '../Images/021-facebook.svg';
import twitterImg from '../Images/043-twitter.svg';
import instagramImg from '../Images/025-instagram.svg';
import airbnbImg from "../Images/airbnb_black.svg"

export default class FooterComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="links-vertical">
                        <div className="title-section">
                            AirBnb
                        </div>
                        <br/>
                        <div className="link-section">
                            <a href="#">Careers</a>
                            <a href="#">News</a>
                            <a href="#">Policies</a>
                            <a href="#">Help</a>
                            <a href="#">Diversity &amp; Belonging</a>
                            <div className="with-box">
                                <a href="#">Accessibility</a>
                                <div className="i-block">New</div> 
                            </div>
                        </div>
                    </div>
                    <div className="links-vertical">
                        <div className="title-section">
                            Discover
                        </div>
                        <br/>
                        <div className="link-section">
                            <a href="#">Trust &amp; Safety</a>
                            <a href="#">Travel Credit</a>
                            <a href="#">Gift Cards</a>
                            <a href="#">Airbnb Citizen</a>
                            <a href="#">Business Travel</a>
                            <div className="with-box">
                                <a href="#">Things To Do</a>
                                <div className="i-block">New</div> 
                            </div>
                            <a href="#">Airbnbmag</a>
                        </div>
                    </div>
                    <div className="links-vertical">
                        <div className="title-section">
                            Hosting
                        </div>
                        <br/>
                        <div className="link-section">
                            <a href="#">Why Host</a>
                            <a href="#">Hospitality</a>
                            <a href="#">Responsible Hosting</a>
                            <a href="#">Community Center</a>
                            <div className="with-exp">
                                <a href="#">Host an Experience</a>
                                <div className="i-block">New</div> 
                            </div>
                            <a href="#">Open Homes</a>
                        </div>
                    </div>
                    <div className="links-vertical">
                        <div className="title-section logo">
                            <img src={facebookImg} alt="facebook-svg"/>
                            <img src={twitterImg} alt="twitter-svg"/>
                            <img src={instagramImg} alt="instagram-svg"/>
                        </div>
                        <br/>
                        <div className="link-section">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="#">Site Map</a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="copyright">
                    <img src={airbnbImg} alt="airbnb-svg"/> &copy; 2019 Airbnb, Inc. All rights reserved.
                </div>
            </React.Fragment>
        );
    }
}