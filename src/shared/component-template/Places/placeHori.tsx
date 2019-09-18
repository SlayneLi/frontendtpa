import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import StarRatings from 'react-star-ratings'
import './placeHori.scss'
import Save from '../save/save';
import { Link } from 'react-router-dom';

const resp= {
    o:{
        items: 1
    }
}
const pad ={
    paddingLeft: 0,
    paddingRight: 0
}

export default class PlaceHori extends React.Component <any,any>{
    state = {
        amenity: [],
    }

    constructor(props:any){
        super(props);
        this.state = {
            amenity: this.props.ame,
        }
    }

    render(){
        return(
            <div className="place-hori-container">
                <div className="place-hori-image">
                    <AliceCarousel infinite={true} startIndex={0} autoHeight={true} responsive={resp} stagePadding={pad}>
                    {this.props.src.slice(0,6).map((i:any) =>{
                            return(
                                <img className="car-img" src={i} alt="place"/>
                            )
                    })}
                    </AliceCarousel>
                </div>
                <div className="place-hori-detail">
                    <div className="place-hori-main">
                        <div className="placehori-header">
                            <div>
                                {this.props.category}
                            </div>
                            <div>
                                <Save id={this.props.id}/>
                            </div>
                        </div>
                        <Link to={`/place/${this.props.id}`}>
                        <div className="placehori-name">
                            {this.props.name}
                        </div>
                        <div className="placehori-spec">
                            <div>
                                {this.props.guest} guests
                            </div>
                            <div>
                                {this.props.bedroom} bedroom (s)
                            </div>
                            <div>
                                {this.props.beds} bed (s)
                            </div>
                            <div>
                                {this.props.bathroom} bathroom (s)
                            </div>
                        </div>
                        <div className="placehori-ame">
                            {this.state.amenity.map((e:any)=>{
                                return(
                                    <div>
                                        {e.icon_name}
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                    </div>
                    <div className="placehori-footer">
                        <div className="rating-place-hori">
                            <StarRatings rating={this.props.rating} name={this.props.ratName} starDimension={this.props.D} starSpacing={this.props.spacing} starRatedColor = {this.props.rateColor} starHoverColor={this.props.hoverColor}/>
                            <div>({this.props.totalRating})</div>
                        </div>
                        <div>
                            {this.props.price}
                        </div>
                    </div>
                </div>
            </div>
        );
}}