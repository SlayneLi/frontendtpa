import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import BookingHistoryCard from '../../../component-template/booking/bookingHistoryCard';
import './bookingHistory.scss'


class BookingHistory extends React.Component <any,any>{
    state={
        booking:[{
            transaction_status: "",
            total_guest: 0,
            booking_type: "",
            check_in: "",
            check_out: "",
            total_fee: 0,
            id:"",
        }],
        detail:[{
            name: "",
        }],
        loaded: 0
    }

    componentDidMount = ()=>{
        if(localStorage.getItem("email") === null){
            alert("Please login first");
            window.location.href = "http://localhost:3000/";
            return;
        }
        let res:{name: ""}[] = []
        axios.get("http://kentang.online:3001/get-bookings/"+localStorage.getItem("email"))
                .then( result => {
                    console.log(result.data)
                    result.data.forEach( (r:any) => {
                        axios.get("http://kentang.online:3001/get-"+r.booking_type.toLowerCase()+"/"+r.occurence_id)
                            .then(rs =>{
                                if(r.booking_type === "Place"){
                                    res.push({
                                        name: rs.data.place_name,
                                    })
                                }
                                else{
                                    res.push({
                                        name: rs.data.experience_name,
                                    })
                                }
                            }).catch( error => {console.log(error)})
                            .then(() => {
                                this.setState({
                                    detail:res,
                                    loaded: 1
                                })
                            })
                        this.setState({
                            booking:result.data,
                        })
                    } )
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }
    
    handleHistory = () => {
        if(this.state.loaded !== 1){
            return "";
        }
        console.log(this.state)
        let bc = [];
        let b = Object.assign(this.state.booking);
        let d = Object.assign(this.state.detail);
        for(let i = 0 ; i < this.state.detail.length ; i++){
            console.log(this.state.detail[i])
            bc.push(
                <BookingHistoryCard status={b[i].transaction_status} guest={b[i].total_guest} type={b[i].booking_type} checkIn={b[i].check_in} name={this.state.detail[i].name} checkout={b[i].check_out} currency={this.props.currency} price={Math.round(b[i].total_fee * this.props.rates)} url={"/booking-"+ b[i].booking_type.toLowerCase() +"/"+b[i].id} rating={b[i].rating} review={b[i].review} />
            )
        }
        return bc;
    }

    render(){
        return(
            <div className="booking-history">
                <div className="booking-history-title">
                    Booking History
                </div>
                <div className="booking-list">
                    {this.handleHistory()}
                </div>
            </div>
        );
}}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        currency: state.currency,
        rates: state.rates,
    }
}

export default connect(mapStateToProps)(BookingHistory)