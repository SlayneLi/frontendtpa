import React from 'react';
import StarRatings  from 'react-star-ratings'
import './placesCard.scss'
import { connect } from 'react-redux';

class Place extends React.Component<any,any>{
    render(){
        return(
            <div className = "place-content">
                <div className="img-plc">
                    <img src={this.props.src[0]} alt="plc" id={this.props.id} className="imgPlcContent"/>
                </div>
                <div className="place-details">
                    <div className="category-plc">{this.props.category}&bull;</div>
                    <div className="loc-plc">{this.props.loc}</div>
                </div>
                <div className="name-plc">
                    {this.props.name}
                </div>
                <div className="price-plc">
                    {Math.round(this.props.price* this.props.rates)} {this.props.currency} / night
                </div>
                <div className="rating-plc">
                    <StarRatings rating={this.props.rating} name={this.props.ratName} starDimension={this.props.D} starSpacing={this.props.spacing} starRatedColor = {this.props.rateColor} starHoverColor={this.props.hoverColor}/>
                    <div>({this.props.totalRating})</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        currency: state.currency,
        rates:state.rates
    }
}
export default connect(mapStateToProps)(Place);