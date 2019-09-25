import React, { Component } from 'react'
import './chat-fragment.scss'

export default class ChatFragment extends Component<any,any> {
    render() {
        return (
            <div className="chat-fragment-container">
                <div className="photo-section">
                    <div className="photo-container">
                        <img src="" alt="name"/>
                    </div>
                </div>
                <div className="host-section">
                    <div className="host-name">

                    </div>
                    <div className="occurence">

                    </div>
                </div>
                <div className="content-section">
                    <div className="message-content">

                    </div>
                    <div className="location-content">

                    </div>
                </div>
                <div className="transaction-section">
                    <div className="transaction-status">

                    </div>
                    <div className="transaction-price">

                    </div>
                </div>
                <div className="favicon-section">
                    <div className="starred-section">
                        <div className="symbol-content">

                        </div>
                        <div className="symbol-definition">

                        </div>
                    </div>
                    <div className="archived-section">
                        <div className="symbol-content">

                        </div>
                        <div className="symbol-definition">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
