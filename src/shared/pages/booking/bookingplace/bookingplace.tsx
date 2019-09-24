import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import GuestComboBox from '../../../component-template/guest/guest'
import './bookingplace.scss'
import Axios from 'axios';
import { connect } from 'react-redux';

class BookingPlace extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.onPostpone = this.onPostpone.bind(this);
        this.onPay = this.onPay.bind(this);
    }

    state = {
        id:"",
        place: {
            pictures: [],
            place_name: "",
            place_type: "",
            average_rating: 0.0,
            average_price: 0,
            max_guest: 0,
        },
        booking: {
            total_guest: 0,
            check_in: "",
            check_out: "",
        },
    }

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-book/${this.props.match.params.id}`)
            .then( result => {
                this.setState({booking: result.data, guest: result.data.total_guest});
                Axios.get("http://kentang.online:3001/get-place/"+result.data.occurence_id)
                    .then( res => {
                        this.setState({place: res.data});
                    }).catch(error=>{
                        console.log(error);
                    })
            })
            .catch( error => {
                console.log(error);
            })
    }

    onPostpone(){
        window.location.href = "http://localhost:3000/booking-history/";
    }

    onPay(){
        console.log("Payed");
    }

    render() {
        return (
            <div className="full-booking-container">
                <div className="bookingplace-container">
                    <div className="book-summary-section">
                        <div className="picture-section">
                            <img src={this.state.place.pictures[0]} alt=""/>
                        </div>
                        <div className="summary-section">
                            <div className="place-summary">
                                Place Summary
                            </div>
                            <div className="place-title">
                                {this.state.place.place_name}
                            </div>
                            <div className="place-rating">
                                <div className="rating">
                                    <StarRatings rating={this.state.place.average_rating} starDimension="1em" starSpacing="-0.75em"/>
                                </div>
                                <div className="guest-count">
                                    <div className="icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="guest-num">
                                        {this.props.totalCount}
                                    </div>
                                    <div className="guest-title">
                                        / {this.state.place.max_guest} guest(s) 
                                    </div>
                                </div>
                            </div>
                            <div className="separator">
                                <hr/>
                            </div>
                            <div className="check-dates">
                                <div className="datelogo">
                                    <i className="far fa-calendar"></i>
                                </div>
                                <div className="check-in check">
                                    {this.state.booking.check_in}
                                </div>
                                <div className="to-symbol">
                                    &rarr;
                                </div>
                                <div className="check-out check">
                                    {this.state.booking.check_out}
                                </div>
                            </div>
                            <div className="combo-section">
                                <div className="guest-combo">
                                    <GuestComboBox maxGuest={this.state.place.max_guest} />
                                </div>
                                <div className="detail-status">
                                    <div className="detail-title">
                                        Payment Detail
                                    </div>
                                    <hr/>
                                    <div className="rent-fee">
                                        <div className="base-fee">
                                            {Math.round(this.state.place.average_price * this.props.rates)} {this.props.currency}
                                        </div>
                                        <div className="cross">
                                            x
                                        </div>
                                        <div className="night">
                                            1
                                        </div>
                                        <div className="night-title">
                                            person(s)
                                        </div>
                                        <div className="total-night-fee">
                                            {Math.round(this.state.place.average_price * this.props.totalCount * this.props.rates)} {this.props.currency}
                                        </div>
                                    </div>
                                    <div className="service-fee">
                                        <div className="service-title">
                                            Service Fee (10%)
                                        </div>
                                        <div className="fee">
                                            {Math.round(this.state.place.average_price * this.props.totalCount * this.props.rates * 10 / 100)} {this.props.currency}
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="total-fee">
                                        <div className="total-title">
                                            Total
                                        </div>
                                        <div className="total-price">
                                            {(Math.round(this.state.place.average_price * this.props.totalCount * this.props.rates * 10 / 100)) + Math.round(this.state.place.average_price * this.props.totalCount * this.props.rates)} {this.props.currency}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <div className="postpone-button">
                                    <div className="button" onClick={this.onPostpone}>
                                        POSTPONE
                                    </div>
                                </div>
                                <div className="pay-button">
                                    <div className="button" onClick={this.onPay}>
                                        PAY
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state:any) =>{
    return{
        currency: state.currency,
        rates:state.rates,
        totalCount: state.totalCount,
    }
}

export default connect(mapStateToProps)(BookingPlace);