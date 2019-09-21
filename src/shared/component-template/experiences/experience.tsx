import React from 'react'
import StarRatings from 'react-star-ratings'
import './experience.scss';
import PointInfo from '../pointInfo/pointInfo';
import { Link } from 'react-router-dom';
import Save from '../save/save';
import { connect } from 'react-redux';

class Experience extends React.Component<any,any>{
    render(){
        return (
            <React.Fragment>
                <div id="save-div" hidden={this.props.isHidden}>
                    <Save id={this.props.id}/>
                </div>
                < Link to={`/experience/${this.props.id}`}>
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
                            {Math.round(this.props.price * this.props.rates)} {this.props.currency}/ person
                        </div>
                        <div className="hour-spent">
                            <PointInfo ico="far fa-clock" text={this.props.hour + " hour (s)"} />
                        </div>
                        <div className="top-two-ame">
                            {this.props.ame.slice(0,2).map((a:any)=>{
                                return(
                                    <PointInfo ico={a.icon_url} text={a.icon_name}/>
                            )})}
                        </div>
                        <div className="exp-rating">
                            <StarRatings rating={this.props.rating} name={this.props.ratName} starDimension={this.props.D} starSpacing={this.props.spacing} starRatedColor = {this.props.rateColor} starHoverColor={this.props.hoverColor} />
                            <div>({this.props.totalRatings})</div>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        currency: state.currency,
        rates:state.rates
    }
}
export default connect(mapStateToProps)(Experience);