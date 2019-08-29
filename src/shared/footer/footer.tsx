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
                            <a href="https://careers.airbnb.com/">Careers</a>
                            <a href="https://press.airbnb.com">News</a>
                            <a href="https://www.airbnb.com/help/topic/250/terms-policies">Policies</a>
                            <a href="https://www.airbnb.com/help?from=footer">Help</a>
                            <a href="https://www.airbnb.com/diversity">Diversity &amp; Belonging</a>
                            <div className="with-box">
                                <a href="https://www.airbnb.com/d/accessibility">Accessibility</a>
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
                            <a href="https://www.airbnb.com/trust">Trust &amp; Safety</a>
                            <a href="https://www.airbnb.com/invite?r=6">Travel Credit</a>
                            <a href="https://www.airbnb.com/gift?s=footer">Gift Cards</a>
                            <a href="https://www.airbnbcitizen.com/?utm_source=airbnb&utm_medium=footer&utm_campaign=product">Airbnb Citizen</a>
                            <a href="https://www.airbnbforwork.com/?utm_source=airbnb&utm_medium=footer&utm_campaign=product">Business Travel</a>
                            <div className="with-box">
                                <a href="https://www.airbnb.com/things-to-do">Things To Do</a>
                                <div className="i-block">New</div> 
                            </div>
                            <a href="https://www.airbnb.com/magazine">Airbnbmag</a>
                        </div>
                    </div>
                    <div className="links-vertical">
                        <div className="title-section">
                            Hosting
                        </div>
                        <br/>
                        <div className="link-section">
                            <a href="https://www.airbnb.com/host/homes?from_footer=1">Why Host</a>
                            <a href="https://www.airbnb.com/hospitality">Hospitality</a>
                            <a href="https://www.airbnb.com/help/article/1376/responsible-hosting-in-the-united-states">Responsible Hosting</a>
                            <a href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center">Community Center</a>
                            <div className="with-exp">
                                <a href="https://www.airbnb.com/host/experiences?from_footer=1">Host an Experience</a>
                                <div className="i-block">New</div> 
                            </div>
                            <a href="https://www.airbnb.com/openhomes?from_footer=1">Open Homes</a>
                        </div>
                    </div>
                    <div className="links-vertical">
                        <div className="title-section logo">
                            <a href="https://www.facebook.com/airbnb"><img src={facebookImg} alt="facebook-svg"/></a>
                            <a href="https://twitter.com/airbnb"><img src={twitterImg} alt="twitter-svg"/></a>
                            <a href="https://www.instagram.com/airbnb/"><img src={instagramImg} alt="instagram-svg"/></a>
                        </div>
                        <br/>
                        <div className="link-section">
                            <a href="https://www.airbnb.com/terms">Terms</a>
                            <a href="https://www.airbnb.com/terms/privacy_policy">Privacy</a>
                            <a href="https://www.airbnb.com/sitemaps/v2">Site Map</a>
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