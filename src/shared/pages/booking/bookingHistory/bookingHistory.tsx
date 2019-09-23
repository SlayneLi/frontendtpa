import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class BookingHistory extends React.Component <any,any>{
    state={
        booking:[],
        
    }
    
    componentDidMount(){
        if(localStorage.getItem("email") === null){
            alert("Please login first");
            window.location.href = "http://localhost:3000/";
            return;
        }
        axios.get("http://kentang.online:3001/get-booking-history/"+this.props.email)
                .then( result => {
                    this.setState({
                        booking:result.data
                    })
                    console.log(result);
                }).catch( error => {
                    console.log(error);
                });
    }

    render(){
        return(
            <div className="booking-history">
                <div className="booking-history-title">
                    Booking History
                </div>
                <div>
                    
                </div>
            </div>
        );
}}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
    }
}

export default connect(mapStateToProps)(BookingHistory)