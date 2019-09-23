import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import BookingHistoryCard from '../../../component-template/booking/bookingHistoryCard';

class BookingHistory extends React.Component <any,any>{
    state={
        booking:[{
            transaction_status: "",
            total_guest: 0,
            booking_type: "",
            check_in: "",
            check_out: "",
            total_fee: 0,
        }],
        detail:[],
        loaded: 0
    }

    componentDidMount = ()=>{
        if(localStorage.getItem("email") === null){
            alert("Please login first");
            window.location.href = "http://localhost:3000/";
            return;
        }
        let res:any[] = []
        axios.get("http://kentang.online:3001/get-bookings/"+localStorage.getItem("email"))
                .then( result => {
                    console.log(result.data)
                    result.data.map( (r:any) => {
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
                    } )

                    this.setState({
                        booking:result.data,
                        detail:res,
                        loaded: 1
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }
    
    handleHistory = () => {
        if(this.state.loaded !== 1){
            return;
        }
        console.log(this.state)
        let bc = [];
        let b = this.state.booking;
        let d:any[] = this.state.detail;
        for(let i = 0 ; i < this.state.booking.length ; i ++){
            bc.push(
                <BookingHistoryCard status={b[i].transaction_status} guest={b[i].total_guest} type={b[i].booking_type} name={d[i].name} checkIn={b[i].check_in} checkout={b[i].check_out} currency={this.props.currency} price={Math.round(b[i].total_fee * this.props.rates)} />
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
                <div>
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