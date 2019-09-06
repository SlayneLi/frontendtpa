import React from 'react';
import StarRatings  from 'react-star-ratings'
import './places.scss'

export default class Place extends React.Component<any,any>{
    render(){
        return(
            <div className = "place-content">
                <div className="img-plc">
                    <img src={this.props.src[0]} alt="plc" id={this.props.id} className="imgPlcContent"/>
                </div>
                <div className="place-details">
                    <div className="category-plc">{this.props.category}</div>
                    <div className="loc-plc">{this.props.loc}</div>
                </div>
                <div className="name-plc">
                    {this.props.name}
                </div>
                <div className="price-plc">
                    {this.props.price} / night
                </div>
                <div className="rating-plc">
                    <StarRatings rating={this.props.rating} name={this.props.ratName} starDimension={this.props.D} starSpacing={this.props.spacing} starRatedColor = {this.props.rateColor} starHoverColor={this.props.hoverColor}/>
                    <div>({this.props.totalRating})</div>
                </div>

            </div>
        )
    }
}