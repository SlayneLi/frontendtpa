import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import GuestComboBox from '../../component-template/guest/guest'
import './bookingplace.scss'

export default class BookingPlace extends Component<any,any> {
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
            <div className="full-booking-container">
                <div className="bookingplace-container">
                    <div className="book-summary-section">
                        <div className="picture-section">
                            <img src="https://66.media.tumblr.com/134f2a70fe4dfe6990fce8a83bc216f7/tumblr_mzry6uGppu1rzs4vyo1_500.png" alt=""/>
                        </div>
                        <div className="summary-section">
                            <div className="place-summary">
                                Place Summary
                            </div>
                            <div className="place-title">
                                Pettinarihome Campo de FIORI
                            </div>
                            <div className="place-rating">
                                <StarRatings />
                            </div>
                            <div className="separator">
                                <hr/>
                            </div>
                            <div className="check-dates">
                                <div className="datelogo">
                                    <i className="far fa-calendar"></i>
                                </div>
                                <div className="check-in check">
                                    Jul 15, 2019
                                </div>
                                <div className="to-symbol">
                                    &rarr;
                                </div>
                                <div className="check-out check">
                                    Jul 16, 2019
                                </div>
                            </div>
                            <div className="combo-section">
                                <div className="guest-combo">
                                    <GuestComboBox />
                                </div>
                                <div className="detail-status">
                                    <div className="detail-title">
                                        Payment Detail
                                    </div>
                                    <hr/>
                                    <div className="rent-fee">
                                        <div className="base-fee">
                                            107
                                        </div>
                                        <div className="cross">
                                            x
                                        </div>
                                        <div className="night">
                                            1
                                        </div>
                                        <div className="night-title">
                                            night(s)
                                        </div>
                                        <div className="total-night-fee">
                                            107
                                        </div>
                                    </div>
                                    <div className="service-fee">
                                        <div className="service-title">
                                            Service Fee
                                        </div>
                                        <div className="fee">
                                            13
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="total-fee">
                                        <div className="total-title">
                                            Total
                                        </div>
                                        <div className="total-price">
                                            120
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <div className="postpone-button">
                                    <div className="button">
                                        POSTPONE
                                    </div>
                                </div>
                                <div className="pay-button">
                                    <div className="button">
                                        PAY
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
