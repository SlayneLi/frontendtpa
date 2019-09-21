import React, { Component } from 'react'
import './chat-detail.scss'
import io from "socket.io-client";
import { connect } from 'react-redux';
import Axios from 'axios';

class ChatDetail extends React.Component<any,any> {
    
    getSocket = () => {
        const port = process.env.PORT || 6969;
        const url = "http://localhost:" + port;
        return io(url);
    }

    state = {
        socket: this.getSocket(),
    }

    handleNewMessage = (message: any) => {
        const chatContainer: any = document.getElementById("chats");
        chatContainer.innerHTML += `<div>${message.content}</div>`
    }

    onUpload = (e:any) => {
        let reader = new FileReader()
        reader.onload = () => {
            console.log(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    onSubmit = (e:any) => {
        e.preventDefault()
        const messageInput: any = document.getElementById("form-input")
        if(messageInput.value === "")
            return
                const data = {
                    sender: this.props.email,
                    type: "text",
                    content: messageInput.value
            }
        //masukin ke axios
        this.state.socket.emit('send message', data, this.handleNewMessage)
        messageInput.value = "";
    }

    componentDidMount(){
        
        this.state.socket.on('new message', this.handleNewMessage);
        
    
        // socket.on('new message', function(data) {
        //     let c = "ours"
        //     let image = user.profileImage;
        //     if(data.sender !== user.id){
        //         c = "theirs"
        //         image = otherUser.profileImage
        //     }
        // })
    
        // messageContainer.innerHTML += `<div class="message-container $(c)">
        //     <img src=$(image) class="profile-image" />
        //     <div>
        //         <div class="message-content">$(data.content)</div>
        //         <small>${getMessageTime({})}</small>
        //     </div>
        // </div>`
    }

    render() {
        return (
            <div className="chat-container">
                <div className="trans-detail">
                    <div className="photo-circular">
                        <img src="https://i.pinimg.com/736x/58/2f/1c/582f1cb3cad7d88685a05a7591252744.jpg" alt=""/>
                    </div>
                    <div className="host-name">
                        Charlotte
                    </div>
                    <div className="host-loc">
                        Phuket, Thailand
                    </div>
                    <div className="review-slot">
                        Verified &middot; 120 reviews
                    </div>
                    <div className="report">
                        <a href="">Report</a>
                    </div>
                    <div className="trip-detail">
                        <div className="trip-title">
                            Trip Detail
                        </div>
                        <div className="trip-desc">
                            Apartment two bedrooms nice view balcony
                        </div>
                        <div className="check-in-out-font">
                            <div className="check-in-title">
                                <div>
                                    Check in
                                </div>
                                <div className="date-time">
                                    May 31, 2019
                                </div>
                            </div>
                            <div className="to-symbol">
                                &rarr;
                            </div>
                            <div className="check-out-title">
                                <div>
                                    Check out
                                </div>
                                <div className="date-time">
                                    Jun 6, 2019
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="payment-detail">
                        <div className="guest-detail">
                            <div className="guest-title">
                                Guest
                            </div>
                            <div className="guest-count">
                                6 adults
                            </div>
                        </div>
                        <div className="confirmation-detail">
                            <div className="confirmation-title">
                                Confirmation code
                            </div>
                            <div className="confirmation-code">
                                AC8XFE
                            </div>
                        </div>
                        <div className="total-payment-detail">
                            <div className="payment-title">
                                Payment
                            </div>
                            <div className="night-fee-section">
                                <div className="nightfee">
                                    67 x 6 nights
                                </div>
                                <div className="total-fee">
                                    402
                                </div>
                            </div>
                            <div className="cleaning-fee-section">
                                <div className="cleaning-title">
                                    Cleaning fee
                                </div>
                                <div className="total-cleaning">
                                    25
                                </div>
                            </div>
                            <div className="service-fee-section">
                                <div className="service-title">
                                    Service fee
                                </div>
                                <div className="total-service">
                                    0
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="final-fee">
                            <div className="final-title">
                                Total
                            </div>
                            <div className="final-amount">
                                427
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-detail">
                    <div className="conversation-title">
                        CHAT PAGE
                    </div>
                    <hr/>
                    <div className="conversation-box">
                        CHAT HERE
                    </div>
                    <div className="form-section">
                        <form action="" id="form-message" onSubmit={this.onSubmit.bind(this)}>
                            <div className="input-section">
                                <input type="text" name="" id="form-input"/>
                            </div>
                            <div className="button-section">
                                <input type="file" accept="image/*" onChange={this.onUpload.bind(this)} style={{display: "none"}} id="file"/>
                                <label htmlFor="file">image</label>
                                <input type="submit" value="SUBMIT"/>
                            </div>
                        </form>
                    </div>
                    <hr/>
                    <div id="chats">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email
    };
};

export default connect(mapStateToProps, {})(ChatDetail);