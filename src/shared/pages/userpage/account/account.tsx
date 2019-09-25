import React, { Component } from 'react'
import {connect} from 'react-redux'
import eye from '../../../Images/eye.svg'
import Axios from 'axios'
import LoginHistory from '../../../component-template/login-history/login-history'
import ToggleButton from 'react-toggle-button'
import './account.scss'

class Account extends Component <any,any>{

    state = {
        histories: [{
            device: "",
            location: "",
            login_time: "",
            net_address: "",
            email: "",
        }],
        password: "",
        npassword: "",
        loaded: 0,
        email: "",
        gvalue: false,
        fvalue: false,
    }

    componentDidMount(){
        Axios.get("http://kentang.online:3001/get-user-history/" +localStorage.getItem("email"))
            .then(result =>{
                console.log(result.data)
                this.setState({
                            histories: result.data,
                            loaded: 1,
                            email: result.data.email,
                        });
            });
        Axios.get("http://localhost:3001/get-user/" +localStorage.getItem("email"))
            .then(result => {
                this.setState({password: result.data.password});
            });
        console.log(this.state.histories);
        console.log(this.state.password);
    }

    showLog = () => {
        if(this.state.loaded===1){
            var log:any = [];
            let c = 0;
            for(let i = this.state.histories.length-1 ; i >= 0 ; i--){
                log.push(
                    <div>
                        <LoginHistory location={this.state.histories[i].location} login={this.state.histories[i].login_time}/>
                    </div>
                )
                c++;
                if(c == 4)
                    break;
            }
            return log;
        }
    }
    showOldPassword(){
        var passField = document.getElementById("password-old") as HTMLInputElement;
        if(passField.type === "text"){
            passField.type = "password";
        }
        else{
            passField.type = "text";
        }
    }

    showNewPassword(){
        var passField = document.getElementById("password-new") as HTMLInputElement;
        if(passField.type === "text"){
            passField.type = "password";
        }
        else{
            passField.type = "text";
        }
    }

    handleUpdate = () =>{
        let op = document.getElementById("password-old") as HTMLInputElement;
        let np = document.getElementById("password-new") as HTMLInputElement;

        if(op.value === np.value){
            alert("new and old password can't be the same");
            return;
        }
        else if(np.value === ""){
            alert("new password input must be filled");
        }
        else{
            Axios.post("http://localhost:3001/update-user-account/" + this.props.email,{
                "password" : this.state.npassword
            })
            alert("updated!");
        }
    }

    render() {
        return (
            <div className="account-container">
                <div className="credential-content">
                    <div className="credential-title">
                        User Credentials
                    </div>
                    <div className="form-input">
                        <div className="email-content">
                            <div className="email-title">
                                Email
                            </div>
                            <div className="email-input">
                                <input type="text" name="" id="" value={this.props.email} disabled/>
                            </div>
                        </div>
                        <div className="old-password-content">
                            <div className="old-password-title">
                                Old-Password
                            </div>
                            <div className="old-password-input">
                                <input type="password" id="password-old" value={this.state.password} disabled/><img src={eye} alt="" onClick={this.showOldPassword.bind(this)}/>
                            </div>
                        </div>
                        <div className="new-password-content">
                            <div className="new-password-title">
                                New-Password
                            </div>
                            <div className="new-password-input">
                                <input type="password" id="password-new" value={this.state.npassword} onChange={(e:any) => this.setState({npassword:e.target.value})}/><img src={eye} alt="" onClick={this.showNewPassword.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="link-content">
                        <div className="link-title">
                            Link Status
                        </div>
                        <div className="google-section">
                            <div className="google-favicon">
                                <i className="fab fa-google"></i>
                            </div>
                            <div className="google-status">
                                <ToggleButton 
                                    value={this.state.gvalue || false}
                                    onToggle = {(value:any) => {
                                        this.setState({
                                            gvalue: !value
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="facebook-section">
                            <div className="facebook-favicon">
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className="facebook-status">
                                <ToggleButton 
                                    value={this.state.fvalue || false}
                                    onToggle = {(value:any) => {
                                        this.setState({
                                            fvalue: !value
                                        })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="button-section" onClick={this.handleUpdate.bind(this)}>
                        <div className="button">
                            Update
                        </div>
                    </div>
                </div>
                <div className="history-log-content">
                    <div className="log-title">
                        LOG HISTORY
                    </div>
                    {this.showLog()}
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

export default connect(mapStateToProps)(Account);