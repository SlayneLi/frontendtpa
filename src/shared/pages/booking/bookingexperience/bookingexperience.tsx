import React, { Component } from 'react'
import StarRating from 'react-star-ratings'
import ComboBox from '../../../component-template/guest/guest'
import './bookingexperience.scss'
import Axios from 'axios';
import PointInfo from '../../../component-template/pointInfo/pointInfo';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

class BookingExperience extends Component<any,any> {
    
    constructor(props:any){
        super(props);
        this.onPostpone = this.onPostpone.bind(this);
        this.onPay = this.onPay.bind(this);
    }

    state = {
        id:"",
        exp: {
            pictures: [],
            experience_name: "",
            experience_type: "",
            average_rating: 0.0,
            estimate_hour: 0,
            price: 0,
            max_guest: 0,
            host_info: {
                host_name: "",
            },
            amenities: [{
                icon_url: "",
                icon_name: "",
                amenity_category: "",
            }],
        },
        booking: {
            total_guest: 0,
            check_in: "",
            check_out: "",
        },
        guest: 0,
        openAllAme: false,
    }

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-book/${this.props.match.params.id}`)
            .then( result => {
                this.setState({booking: result.data, guest: result.data.total_guest});
                Axios.get("http://kentang.online:3001/get-experience/"+result.data.occurence_id)
                    .then( res => {
                        this.setState({exp: res.data});
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

    openCloseAme= ()=>{
        var x = !this.state.openAllAme;
        this.setState({openAllAme: x});
    }

    closeModal = () => {
        this.setState({openAllAme:false});
    }

    showAmenities = ()=>{
        var b = []
        b.push(
            <div className="basic-ame">
                <div>
                    Basic:
                </div>
                <div>
                    {this.state.exp.amenities.map((a:any) => {
                        if(a.amenity_category === "Basic"){
                            return(
                                <span>
                                    <PointInfo ico={a.icon_url} text={a.icon_name} />
                                </span>)
                        }
                        return(<span></span>)
                    })}
                </div>
            </div>
        );
        b.push(
            <div className="safety-ame">
                <div>
                    Safety:
                </div>
                <div>
                    {this.state.exp.amenities.map((a:any)=>{
                        if(a.amenity_category !== "Basic"){
                            return(
                                <span>
                                    <PointInfo ico={a.icon_url} text={a.icon_name}/>
                                </span>)
                        }
                        return(<span></span>)
                    })}
                </div>
            </div>
        )
        return b;
        
    }
    
    render() {
        return (
            <div className="book-ex-container">
                <div className="experience-container">
                    <div className="picture-container">
                        <img src={this.state.exp.pictures[0]} alt=""/>
                    </div>
                    <div className="detail-container">
                        <div className="exp-summary">
                            Experience Summary
                        </div>
                        <div className="exp-title">
                            {this.state.exp.experience_name}
                        </div>
                        <div className="rate-hour">
                            <div className="exp-rate">
                                <StarRating rating={this.state.exp.average_rating} starDimension="1em" starSpacing="-0.75em" />
                            </div>
                            <div className="hour-host">
                                <div className="estimate-time">
                                    <div className="est-time">
                                        Estimate Hour :
                                    </div>
                                    <div className="est-value">
                                        <div className="value">
                                            {this.state.exp.estimate_hour}
                                        </div>
                                        <div className="hour">
                                            hour(s)
                                        </div>
                                    </div>
                                </div>
                                <div className="host-profile">
                                    <div className="host-title">
                                        Host Name :
                                    </div>
                                    <div className="host-name">
                                        {this.state.exp.host_info.host_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="occurence-guest">
                            <div className="occurence">
                                {this.state.booking.check_in}
                            </div>
                            <div className="guest-count">
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="guest-num">
                                    {this.props.totalCount}
                                </div>
                                <div className="guest-title">
                                    guest(s)
                                </div>
                            </div>
                        </div>
                        <div className="combo-amenities">
                            <div className="combo-box">
                                <ComboBox maxGuest={this.state.exp.max_guest}/>
                            </div>
                            <div className="amenities">
                                <div className="ame-title">
                                    Amenities
                                </div>
                                <div className="ame-list">
                                    {this.state.exp.amenities.slice(0,2).map((a:any) => {
                                        return(
                                            <PointInfo ico={a.icon_url} text={a.icon_name} />
                                        )
                                    })}
                                    <div style={{cursor: "pointer", textAlign: "left"}} onClick={this.openCloseAme}>
                                        Show all amenities
                                    </div>
                                    <ReactModal
                                        isOpen={this.state.openAllAme}
                                    >
                                        <div className=" closeLogo" onClick={this.closeModal}>
                                            <i className="fas fa-times" />
                                        </div>
                                        <div className="amenities-modal">
                                            <div>
                                                All Amenities:
                                            </div>
                                            <div>
                                                {this.showAmenities()}                                        
                                            </div>
                                        </div>
                                    </ReactModal>
                                </div>
                                <div className="rent-fee">
                                    <div className="base-fee">
                                        {Math.round(this.state.exp.price * this.props.rates)} {this.props.currency}
                                    </div>
                                    <div className="cross">
                                        x
                                    </div>
                                    <div className="night">
                                        {this.props.totalCount}
                                    </div>
                                    <div className="night-title">
                                        person(s)
                                    </div>
                                    <div className="total-night-fee">
                                        {Math.round(this.state.exp.price * this.props.totalCount * this.props.rates)} {this.props.currency}
                                    </div>
                                </div>
                                <div className="service-fee">
                                    <div className="service-title">
                                        Service Fee (10%)
                                    </div>
                                    <div className="fee">
                                        {Math.round(this.state.exp.price * this.props.totalCount * this.props.rates * 10 / 100)} {this.props.currency}
                                    </div>
                                </div>
                                <hr/>
                                <div className="total-fee">
                                    <div className="total-title">
                                        Total
                                    </div>
                                    <div className="total-price">
                                        {(Math.round(this.state.exp.price * this.props.totalCount * this.props.rates * 10 / 100)) + Math.round(this.state.exp.price * this.props.totalCount * this.props.rates)} {this.props.currency}
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

export default connect(mapStateToProps)(BookingExperience);