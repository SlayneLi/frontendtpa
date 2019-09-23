import React, { Component } from 'react'
import './booking.scss';
import Axios from 'axios';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Booking extends Component<any,any> {
    state = {
        place: [],
        experience: [],
        history: [],
    }
    
    componentDidMount(){
        Axios.get("http://kentang.online:3001/get-booking-places/"+this.props.email)
            .then(result => {
                console.log(result);
                this.setState({place:result.data});
            })
        Axios.get("http://kentang.online:3001/get-booking-experience/"+this.props.email)
            .then(result => {
                console.log(result);
                this.setState({experience:result.data});
            })
        Axios.get("http://kentang.online:3001/get-booking-history/"+this.props.email)
            .then(result => {
                console.log(result);
                this.setState({history:result.data});
            })
    }

    render() {
        return (
            <div className="booking-container">
                <div className="title">
                    TPA Web with Gopher already sorts all of your bookings
                </div>
                <div className="book-section">
                    <div className="book-place">
                        <div className="title">
                            Place
                        </div>
                        <div className="place-content">
                            {this.state.place.map((p:any) => {
                                return(
                                    <Link to={`/place-summary/${p.id}`}>
                                        <div className="content">
                                            asd
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="book-experience">
                        <div className="title">
                            Experience
                        </div>
                        <div className="experience-content">
                            {this.state.experience.map((e:any) => {
                                return(
                                    <Link to={`/experience-summary/${e.id}`}>
                                        <div className="content">
                                            asd
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="book-history">
                        <div className="title">
                            History
                        </div>
                        <div className="history-content">
                            {this.state.history.map((h:any) => {
                                return(
                                    <Link to={`/experience-summary/${h.id}`}>
                                        <div className="content">
                                            asd
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname,
        rates: state.rates,
        currency: state.currency,
    }
}

export default connect(mapStateToProps)(Booking);