import React from 'react';

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
                        <div className="bh-check">
                            <div>Check in : </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="bh-right">

                    </div>
                </div>
            </div>
        );
}}