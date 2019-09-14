import React from "react";
import ReactModal from 'react-modal';
import close from "../../Images/close.svg";
import facebook from "../../Images/fbBlue.svg";
import google from "../../Images/GoogleLogo.svg";
import email from "../../Images/email.svg";
import eye from "../../Images/eye.svg";
import lock from "../../Images/lock.svg";
import person from "../../Images/person.svg";
import "./signUp.scss";
import Input from "../../component-template/input/input";

export default class SignUpModal extends React.Component<any,any>{
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
        if(passField.type === "text"){
            passField.type = "password";
        }
        else{
            passField.type = "text";
        }
    }

    render(){
        return(
            <div>
                <div onClick={this.openModal}>Sign Up</div>
                <ReactModal
                    isOpen={this.modalState()}
                >
                    <div className="signUp">
                        <img src={close} alt="close logo" onClick={this.closeModal} className="closeLogo"/>
                        <div className="fbSignUp">
                            <img src={facebook} alt="fb logo" className="fbLogo"/>
                            <div>Sign Up with Facebook</div>
                        </div>
                        <div className="googleSignUp">
                            <img src={google} alt="google logo" className="gLogo"/>
                            <div>Sign Up with Google</div>
                        </div>
                        <div className="divider">
                            <hr/>
                            <div>Or</div>
                            <hr/>
                        </div>
                        <div className="emailBar">
                            <Input
                                type="email"
                                placeholder="Email"
                            />
                            <img src={email} alt="emailLogo"/>
                        </div>
                        <div className="firstNameBar">
                            <Input type="text" name="" id="" placeholder="First Name"/>
                            <img src={person} alt="person"/>
                        </div>
                        <div className="lastNameBar">
                            <Input type="text" name="" id="" placeholder="Last Name"/>
                            <img src={person} alt="person"/>
                        </div>
                        <div className="passBar">
                            <Input type="password" name="" id="pass" placeholder="Password" />
                            <div>
                                <img src={eye} alt="eyeLogo" onClick={this.showPassword}/>
                                <img src={lock} alt="lockLogo"/>
                            </div>
                        </div>
                        <div className="signUpBtn">
                            <div>Sign Up</div>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}