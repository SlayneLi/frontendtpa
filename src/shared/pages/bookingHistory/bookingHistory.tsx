import React from 'react';
import axios from 'axios';

export default class BookingHistory extends React.Component {
    state={
        booking:[],
    }
    
    componentDidMount(){
        axios.get("http://kentang.online:3001/get-booking-history/vintzclagoz@gmail.com")
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