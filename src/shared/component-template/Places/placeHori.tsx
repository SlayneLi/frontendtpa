import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import StarRatings from 'react-star-ratings'
import './placeHori.scss'

export default class PlaceHori extends React.Component <any,any>{
    render(){
        return(
            <div className="place-hori-container">
                <div className="place-hori-image">
                    <AliceCarousel >
                    {this.props.src.slice(0,6).map((i:any) =>{
                            return(
                                <img src={i} alt="place"/>
                            )
                    })}
                    </AliceCarousel>
                </div>
                <div className="place-hori-detail">
                    <div>
                        <div>
                            <div>
                                {this.props.type}
                            </div>
                            <div>
                                <i className="fa fa-heart-o"></i>
                            </div>
                        </div>
                        <div>
                            {this.props.name}
                        </div>
                        <div>
                            <div>
                                {this.props.guest}
                            </div>
                            <div>
                                {this.props.bedroom}
                            </div>
                            <div>
                                {this.props.beds}
                            </div>
                            <div>
                                {this.props.bathroom}
                            </div>
                        </div>
                        <div>
                        {this.props.anmenities.slice(0,3).map((a:any) =>{
                            return(
                                <div>{a.name}</div>
                            )
                        })}
                        </div>
                    </div>
                    <div>
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