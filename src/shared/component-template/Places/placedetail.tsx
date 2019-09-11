import React, { Component } from 'react';
import Axios from 'axios';
import './placedetail.scss'
import Guest from '../guest/guest';

export default class placedetail extends Component<any,any> {
    state = {
        id : "",
        data : {
            max_guest: 0,
            place_name: "",
            place_loc: "",
            host_info: {
                host_name: "",
                host_picture: ""
            }
        },
        pic: []
    }

    componentWillMount(){
        this.setState({id: this.props.match.params.id});
        Axios.get(`http://kentang.online:3001/get-place/${this.props.match.params.id}`)
            .then( result => {
                this.setState({data: result.data,
                                pic: result.data.pictures});
                console.log(result);
            })
            .catch( error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="place-detail-container">
                <div className="place-detail-image">
                        <div>
                            <img src={this.state.pic[0]} alt="plc"/>
                            <img src={this.state.pic[1]} alt="plc"/>
                            <img src={this.state.pic[2]} alt="plc"/>
                        </div>
                        <div>
                            <img src={this.state.pic[3]} alt="plc"/>
                            <img src={this.state.pic[4]} alt="plc"/>
                            <img src={this.state.pic[5]} alt="plc"/>
                        </div>
                </div>
                <div className="details-container">
                    <div className="info-container">
                        <div className="info-header">
                            <div className="info-title">
                                <div className="info-name">
                                    {this.state.data.place_name}
                                </div>
                                <div>
                                    {this.state.data.place_loc}
                                </div>
                            </div>
                            <div className="contact-info">
                                <div>
                                    <img src={this.state.data.host_info.host_picture} alt="pic"/>
                                </div>
                                <div>
                                    {this.state.data.host_info.host_name}
                                </div>
                            </div>
                        </div>
                        <div className="spec-info">
                            <div className="home">
                                <i className="fa fa-home"/> 
                            </div>
                        </div>
                    </div>
                    <div className="guest-info-container">
                        <Guest maxGuest={this.state.data.max_guest}/>
                    </div>
                </div>
            </div>
        )
    }
}
