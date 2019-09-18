import React, { Component } from 'react'
import './chat-detail.scss'

export default class ChatDetail extends Component {
    render() {
        return (
            <div className="chat-container">
                <div className="trans-detail">
                    <div className="photo-circular">
                        <img src="https://i.pinimg.com/736x/58/2f/1c/582f1cb3cad7d88685a05a7591252744.jpg" alt=""/>
                    </div>
                    <div className="host-name">
                        Charlotte
                    </div>
                    <div className="host-loc">
                        Phuket, Thailand
                    </div>
                    <div className="review-slot">
                        Verified &middot; 120 reviews
                    </div>
                    <div className="report">
                        <a href="">Report</a>
                    </div>
                    <div className="trip-detail">
                        <div className="trip-title">
                            Trip Detail
                        </div>
                        <div className="trip-desc">
                            Apartment two bedrooms nice view balcony
                        </div>
                        <div className="check-in-out-font">
                            <div className="check-in-title">
                                Check in
                            </div>
                            <div className="to-symbol">
                                &rarr;
                            </div>
                            <div className="check-out-title">
                                Check out
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-detail">
                    DSA
                </div>
            </div>
        )
    }
}
