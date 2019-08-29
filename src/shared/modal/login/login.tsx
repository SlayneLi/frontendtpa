import React from 'react';
import ReactModal from 'react-modal';
import close from "../../Images/close.svg";
import facebook from "../../Images/fbBlue.svg";
import google from "../../Images/GoogleLogo.svg";
import email from "../../Images/email.svg";
import eye from "../../Images/eye.svg";
import lock from "../../Images/lock.svg";
import "./login.scss";

export default class LoginModal extends React.Component<any,any>{
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

    showPassword(){
        var passField = document.getElementById("pass") as HTMLInputElement;
        if(passField.type == "text"){
            passField.type = "password";
        }
        else{
            passField.type = "text";
        }
    }

    render(){
        return(
            <div>
                <div onClick={this.openModal}>Login</div>
                <ReactModal
                    isOpen={this.modalState()}
                >
                    <img src={close} alt="close logo" onClick={this.closeModal} className="closeLogo"/>                    
                    <form className="login">
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
                    <div className="emailBar" >
                        <input type="text" name="email" placeholder="Email"/>
                        <img src={email} alt="emailLogo"/>
                    </div>
                    <div className="passBar">
                        <input id="pass" type="password" name="pass" placeholder="Password"/>
                        <div>
                            <img src={eye} alt="eyeLogo" onClick={this.showPassword}/>
                            <img src={lock} alt="lockLogo"/>
                        </div>
                    </div>
                    <div className="remMe">
                        <input type="checkbox" name="remMe"/>
                        <div>Remember me</div>
                    </div>
                    <div className="loginBtn">
                        <button type="submit">Login</button>
                    </div>
                    <div>
                        <div>Forget Password</div>
                    </div>
                    <div>
                        <div>Don't have an account?</div>
                        <div>Sign Up</div>
                    </div>
                </form>
                </ReactModal>
            </div>
        );
    }

}