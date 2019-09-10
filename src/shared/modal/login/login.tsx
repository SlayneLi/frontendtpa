import React from 'react';
import ReactModal from 'react-modal';
import google from "../../Images/GoogleLogo.svg";
import email from "../../Images/email.svg";
import eye from "../../Images/eye.svg";
import lock from "../../Images/lock.svg";
import "./login.scss";
import Input from '../../component-template/input/input';
import {connect} from 'react-redux'

class LoginModal extends React.Component<any,any>{
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
        var passField = document.getElementById("password-login") as HTMLInputElement;
        if(passField.type === "text"){
            passField.type = "password";
        }
        else{
            passField.type = "text";
        }
    }

    login(e:any){
        e.preventDefault();
        console.log("bing bong");
        var email = document.getElementById("email-login") as HTMLInputElement;
        var password = document.getElementById("password-login") as HTMLInputElement;
        var flag = 0;
        if(email.value === ""){
            var emailErr = document.getElementById("emailErr") as HTMLDivElement;
            emailErr.hidden = false;
            flag++;
        }
        else{
            var emailErr = document.getElementById("emailErr") as HTMLDivElement;
            emailErr.hidden = true;
        }
        if(password.value === ""){
            var passErr = document.getElementById("passErr") as HTMLDivElement;
            passErr.hidden = false;
            flag++;
        }
        else{
            var passErr = document.getElementById("passErr") as HTMLDivElement;
            passErr.hidden = true;
        }
        if(flag>=1){
            return;
        }
        var fName = "dummy";
        var lName = "dummy";
        this.props.onLogin(email.value,fName,lName);
    }

    render(){
        return(
            <div>
                <div onClick={this.openModal}>Login</div>
                <ReactModal
                    isOpen={this.modalState()}
                >
                    <i className="fa fa-close closeLogo" onClick={this.closeModal}></i>
                    <form className="login" method="POST">
                        <div className="fbLogin">
                            <div><i className="fa fa-facebook fbLogo"></i> Login with Facebook</div>
                        </div>
                        <div className="googleLogin">
                            <img src={google} alt="google logo" className="gLogo"/>
                            <div>Sign Up with Google</div>
                        </div>
                        <div className="divider">
                            <hr/>
                            <div>Or</div>
                            <hr/>
                        </div>
                        <div className="emailBar" >
                            <Input type="email" id="email-login" name="email" placeholder="Email" errId="emailErr" errorText="Invalid Email"/>
                            <img src={email} alt="emailLogo"/>
                        </div>
                        <div className="passBar">
                            <Input type="password" id="password-login" name="pass" placeholder="Password" errId="passErr" errorText="Invalid Password"/>
                            <div className="passwordLogo">
                                <img src={eye} alt="eyeLogo" onClick={this.showPassword}/>
                                <img src={lock} alt="lockLogo"/>
                            </div>
                        </div>
                        <div className="remMe">
                            <Input type="checkbox" name="remMe"/>
                            <div>Remember me</div>
                        </div>
                        <div className="loginBtn">
                            <button onClick={event => this.login(event)}>Login</button>
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

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname
    };
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        onLogin: (email:string,firstname:string,lastname:string) => dispatch({type: 'LOGIN',email:email, fName:firstname, lName:lastname })
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginModal);