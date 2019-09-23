import React from 'react';
import './bookingHistoryCard.scss'

export default class BookingHistoryCard extends React.Component<any,any> {
    render(){
        return(
            <div className="bh-card">
                <div className="bh-header">
                    <div>{this.props.status}</div>
                    <div>{this.props.guest} Guest(s)</div>
                </div>
                <div className="bh-content">
                    <div className="bh-left">
                        <div className="bh-title">
                            <div>{this.props.type}</div>
                            <div> | </div>
                            <div>{this.props.name}</div>
                        </div>
                        <div className="bh-check-in">
                            <div>Check in : {this.props.checkIn}</div>
                        </div>
                        <div className="bh-check-out">
                            <div>Check Out : {this.props.checkout}</div>
                        </div>
                    </div>
                    <div className="bh-right">
                        <div>
                            {this.props.currency}
                        </div>
                        <div>
                            {this.props.price}
                        </div>
                    </div>
                </div>
            </div>
        );
}}