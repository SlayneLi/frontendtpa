import React from 'react';
import ReactModal from 'react-modal';
import close from "../../Images/close.svg";
import facebook from "../../Images/fbBlue.svg";
import google from "../../Images/GoogleLogo.svg";
import email from "../../Images/email.svg";
import lock from "../../Images/lock.svg";
import eye from "../../Images/eye.svg";
import "./login.scss";

export default class Login extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            showModal: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal (){
        this.setState({showModal:true});
    }
    
    closeModal(){
        this.setState({showModal:false});
    }

    public modalState(){
        const currState = this.state;
        return currState["showModal"];
    }

    render(){
        return(
            <div>
                <div onClick={this.openModal}>Login</div>
                <ReactModal
                isOpen={this.modalState()}
                >
                    <div className="lgnModal">
                        <img src={close} alt="close logo" onClick={this.closeModal} className="closeLogo"/>
                        <div className="fbLogin">
                            <img src={facebook} alt="fb logo" className="fbLogo"/>
                            <div>Login with Facebook</div>
                        </div>
                        <div className="googleLogin">
                            <img src={google} alt="google logo" className="gLogo"/>
                            <div>Login with Google</div>
                        </div>
                        <div className="divider">
                            <hr/>
                            <div>Or</div>
                            <hr/>
                        </div>
                        <div className="emailBar">
                            <input type="email" name="" id="" placeholder="Email"/>
                            <img src={email} alt="emailLogo"/>
                        </div>
                        <div className="passBar">
                            <input type="password" name="" id="" placeholder="Password" />
                            <div>
                                <img src={eye} alt="eyeLogo"/>
                                <img src={lock} alt="lockLogo"/>
                            </div>
                        </div>
                        <div className="remMe">
                            <input type="checkbox" name="" id=""/>
                            <div>Remember me</div>
                        </div>
                        <div className="loginBtn">
                            <div>Login</div>
                        </div>
                        <div>
                            <div>Forget Password</div>
                        </div>
                        <div>
                            <div>Don't have an account?</div>
                            <div>Sign Up</div>
                        </div>
                    </div>
                </ReactModal>
            </div>
        );
    }

}