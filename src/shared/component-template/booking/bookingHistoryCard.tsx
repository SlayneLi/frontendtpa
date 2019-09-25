import React from 'react';
import './bookingHistoryCard.scss'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export default class BookingHistoryCard extends React.Component<any,any> {
    state = {

    }

    changeRating = () => {

    }
    
    isPosponed= ()=>{
        if(this.props.status === "Postponed"){
            return(
                <div className="cancel-booking">Cancel</div>
            )
        }
    }

    isReviewed = () =>{
        if(this.props.status === "Payed"){
            let x = [];
            if(this.props.review.length = 0){
                x.push(
                    <div>
                        Please enter a review 
                        <textarea cols={30} rows={10} placeholder="Enter review here"></textarea>
                    </div>
                )
            }
            if(this.props.rating === 0){
                x.push(
                    <div>
                        Please enter a rating 
                        <StarRatings />
                    </div>
                )
            }
            return x;
        }
    }
    
    render(){
        return(
            <div className="bh-card">
                <div className="bh-header">
                    <div>
                        {this.props.status}
                    </div>
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
                        <div>
                            {this.isReviewed()}
                        </div>
                    </div>
                    <div className="bh-right">
                        <div>
                            {this.props.currency}
                        </div>
                        <div>
                            {this.props.price}  
                        </div>
                        <div>
                            {this.isPosponed()}
                        </div>
                        <Link to={this.props.url}>
                            <div style={{cursor:"pointer"}}>
                                See details
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
}}