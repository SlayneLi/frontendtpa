import React from 'react';
import './userReview.scss'
import StarRatings from 'react-star-ratings';

export default class UserReview extends React.Component<any,any> {
    render(){
        return(
            <div className="user-review">
                <div className="user-info">
                    <div className="pp">
                        <img src={this.props.img} alt="review"/>
                    </div>
                    <div className="user-detail">
                        <div>
                            {this.props.name}
                        </div>
                        <div>
                            {this.props.jday}
                        </div>
                        <div>
                            <StarRatings rating={this.props.rating} starDimension="1em" starSpacing="-0.75em"/>
                        </div>
                    </div>
                </div>
                <div className="review-detail">
                    {this.props.det}
                </div>
            </div>
        );
}}