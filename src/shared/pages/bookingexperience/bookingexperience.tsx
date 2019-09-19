import React, { Component } from 'react'
import StarRating from 'react-star-ratings'
import ComboBox from '../../component-template/guest/guest'
import './bookingexperience.scss'

export default class BookingExperience extends Component<any,any> {
    
    constructor(props:any){
        super(props);
        this.onPostpone = this.onPostpone.bind(this);
        this.onPay = this.onPay.bind(this);
    }

    onPostpone(){
        console.log("Postponed");
    }

    onPay(){
        console.log("Payed");
    }
    
    render() {
        return (
            <div className="book-ex-container">
                <div className="experience-container">
                    <div className="picture-container">
                        <img src="https://3.bp.blogspot.com/-Z7lIl9Iz5eA/XO7bkBem75I/AAAAAAAADc0/06n1aAbFV6YjJv54am8EbAVcVcKWSPs_wCKgBGAs/w1600-h900-p-k-no-nu/nezuko-kamado-kimetsu-no-yaiba-4K-68.jpg" alt=""/>
                    </div>
                    <div className="detail-container">
                        <div className="exp-summary">
                            Experience Summary
                        </div>
                        <div className="exp-title">
                            Phuket Old Town 1 hour Instagram Tour
                        </div>
                        <div className="rate-hour">
                            <div className="exp-rate">
                                <StarRating starSpacing="0,6em" />
                            </div>
                            <div className="hour-host">
                                <div className="estimate-time">
                                    <div className="est-time">
                                        Estimate Hour :
                                    </div>
                                    <div className="est-value">
                                        <div className="value">
                                            1
                                        </div>
                                        <div className="hour">
                                            hour(s)
                                        </div>
                                    </div>
                                </div>
                                <div className="host-profile">
                                    <div className="host-title">
                                        Host Name :
                                    </div>
                                    <div className="host-name">
                                        Pitchsinee
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="occurence-guest">
                            <div className="occurence">
                                Friday, May 24
                            </div>
                            <div className="guest-count">
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="guest-num">
                                    1
                                </div>
                                <div className="guest-title">
                                    guest(s)
                                </div>
                            </div>
                        </div>
                        <div className="combo-amenities">
                            <div className="combo-box">
                                <ComboBox />
                            </div>
                            <div className="amenities">
                                <div className="ame-title">
                                    Amenities
                                </div>
                                <div className="ame-list">
                                    <div className="ame">
                                        <div className="icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="ame-title">
                                            User
                                        </div>
                                    </div>
                                    <div className="ame">
                                        <div className="icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="ame-title">
                                            User
                                        </div>
                                    </div>
                                    <div className="ame">
                                        <div className="icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="ame-title">
                                            User
                                        </div>
                                    </div>
                                    <div className="ame">
                                        <div className="icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="ame-title">
                                            User
                                        </div>
                                    </div>
                                    <div className="ame">
                                        <div className="icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="ame-title">
                                            User
                                        </div>
                                    </div>
                                    <div className="ame">
                                        <div className="icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="ame-title">
                                            User
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="postpone-button">
                                <div className="button" onClick={this.onPostpone}>
                                    POSTPONE
                                </div>
                            </div>
                            <div className="pay-button">
                                <div className="button" onClick={this.onPay}>
                                    PAY
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
