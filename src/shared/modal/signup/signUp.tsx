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

    initYears(){
        var years = [];

        for (let i = 2019; i >= 1899; i--) {
            years.push(<option value={i}>{i}</option>);
        }
        return years;
    }

    initDate(){
        var date = [];
        for (let i = 1; i <= 31; i++) {
            date.push(<option value={i}>{i}</option>);
        }
        return date;
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

    changeDate(){
        var month = document.getElementById("month") as HTMLSelectElement;
        var year = document.getElementById("year") as HTMLSelectElement;
        //var date = document.getElementById("day") as HTMLSelectElement
        if(month.value === "2"){
            
            if(+year.value % 4 === 0){

            }
        }
        else if(+month.value % 2 === 0){

        }
    }

    validate(){

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
                        <div className="birthdayText">
                            <strong>Birthday</strong>
                            <div>To sign up, you must be 18 or older. Other people won’t see your birthday.</div>
                        </div>
                        <div className="birthdayBar">
                            <select name="month" id="month">
                                <option value="" disabled selected>Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select name="day" id="day">
                                <option value="" disabled selected>Day</option>
                                {this.initDate()}
                            </select>
                            <select name="year" id="year">
                                <option value="" disabled selected>Year</option>
                                {this.initYears()}
                            </select>
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