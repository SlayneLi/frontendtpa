import React from 'react'
import StarRatings from 'react-star-ratings'
import './experience.scss';

export default class Experience extends React.Component<any,any>{
    render(){
        return (
            <div className="exp-content">
                <div className="exp-img">
                    <img src={this.props.src[0]} alt="exp" className="exp-img-cn"/>
                </div>
                <div className="exp-details">
                    <div className="exp-category">
                        {this.props.cat}
                    </div>
                    <div className="exp-place">
                        {this.props.place}
                    </div>
                </div>
                <div className="exp-name">
                    {this.props.name}
                </div>
                <div className="exp-price">
                    {this.props.price} / person
                </div>
                <div className="exp-rating">
                    <StarRatings rating={this.props.rating} name={this.props.ratName} starDimension={this.props.D} starSpacing={this.props.spacing} starRatedColor = {this.props.rateColor} starHoverColor={this.props.hoverColor} />
                    <div>({this.props.totalRatings})</div>
                </div>
            </div>
        )
    }
}