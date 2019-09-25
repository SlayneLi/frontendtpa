import React, { Component } from 'react'
import Axios from 'axios'
import ImageUpload from '../../../image-upload/image-upload'
import {connect} from 'react-redux'
import './profile.scss'


class Profile extends Component<any,any> {
    
    state = {
        currency: '',
        display_picture: '',
        email: '',
        first_name: '',
        gender: '',
        language: '',
        last_name: '',
        location: '',
        password: '',
        phone_number: '',
        self_description: '',
        updated: false,
    }

    constructor(props:any){
        super(props);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
        Axios.get(`http://localhost:3001/get-user/`+localStorage.getItem("email"))
            .then(res => {
                let data = res.data;
                this.setState({
                    currency: data.currency,
                    display_picture: data.display_picture,
                    email: data.email,
                    first_name: data.first_name,
                    gender: data.gender,
                    language: data.language,
                    last_name: data.last_name,
                    location: data.location,
                    password: data.password,
                    phone_number: data.phone_number,
                    self_description: data.self_description
                })
            })
        console.log("pic url : ",localStorage.getItem("url"));
    }

    handleUpdate(){
        let fn:any = document.getElementById("fn") as HTMLInputElement;
        let ln:any = document.getElementById("ln") as HTMLInputElement;
        let gender:any = document.getElementById("gender") as HTMLSelectElement;
        let currency:any = document.getElementById("currency") as HTMLSelectElement;
        let desc:any = document.getElementById("desc") as HTMLInputElement;
        let lang:any = document.getElementById("language") as HTMLInputElement;

        if(fn.value === ""){
            alert("no content on first name input");
            return;
        }
        else if(ln.value === ""){
            alert("no content on last name input");
            return;
        }
        else if(desc.value === ""){
            alert("no content on self description input");
            return;
        }
        else if(lang.value === ""){
            alert("no content on language input");
            return;
        }
        Axios.post("http://localhost:3001/update-user-profile/" + this.props.email,{
            "FirstName" : this.state.first_name,
            "LastName" : this.state.last_name,
            "Gender": this.state.gender,
            "Currency": this.state.currency,
            "Language": this.state.language,
            "SelfDescription" : this.state.self_description,
            "DisplayPicture": localStorage.getItem("url")
        })
    }

    setAccess(){
        let a:any = document.getElementById("upd-btn") as HTMLButtonElement;
        if(this.state.updated === false)
            a.setAttribute("disabled", true);
        else
            a.setAttribute("disabled", false);
    }

    handleCurrencyChange = (e:React.ChangeEvent < HTMLSelectElement >) =>{
        this.setState({currency:e.target.value});
        console.log(this.state.currency);
    }

    handleGenderChange = (e:React.ChangeEvent < HTMLSelectElement >) =>{
        this.setState({gender:e.target.value});
        console.log(this.state.gender);
    }

    render() {
        return (
            <div className="profile-container">
                <div className="picture-section">
                    <div className="picture-title">
                        Profile Picture
                    </div>
                    <div className="image-container">
                        <ImageUpload />
                    </div>
                </div>
                <div className="separator-section">
                    
                </div>
                <div className="profile-content">
                    <div className="profile-title">
                        Update Profile
                    </div>
                    <div className="first-name-section">
                        <div className="first-name-title">
                            First Name
                        </div>
                        <div className="first-name-input">
                            <input 
                                type="text"
                                name=""
                                id="fn"
                                value={this.state.first_name}
                                onChange={(e:any) => this.setState({
                                                                        first_name:e.target.value,
                                                                        updated: true,
                                                                    })}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="last-name-section">
                        <div className="last-name-title">
                            Last Name
                        </div>
                        <div className="last-name-input">
                            <input
                                type="text"
                                name=""
                                id="ln" 
                                value={this.state.last_name}
                                onChange={(e:any)=> this.setState({
                                                                    last_name:e.target.value,
                                                                    updated: true,
                                                                })}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="combo-box-section">
                        <div className="gender-section">
                            <div className="gender-title">
                                Gender
                            </div>
                            <div className="gender-selection">
                                <select name="" id="gender" value={this.state.gender} onChange={this.handleGenderChange}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="currency-section">
                            <div className="currency-title">
                                Preffered Currency
                            </div>
                            <div className="currency-selection">
                                <select name="" id="currency" value={this.state.currency} onChange={this.handleCurrencyChange}>
                                    <option value="USD">USD</option>
                                    <option value="JPY">JPY</option>
                                    <option value="IDR">IDR</option>
                                    <option value="SGD">SGD</option>
                                    <option value="KRW">KRW</option>
                                    <option value="THB">THB</option>
                                    <option value="CAD">CAD</option>
                                    <option value="CNY">CNY</option>
                                    <option value="PHP">PHP</option>
                                    <option value="GBP">GBP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="description-section">
                        <div className="description-title">
                            Describe Yourself
                        </div>
                        <div className="description-container">
                            <textarea
                                name=""
                                id="desc"
                                value={this.state.self_description}
                                onChange={(e:any) => this.setState({
                                                                    self_description: e.target.value,
                                                                    updated: true,
                                                                    })}
                            >
                            </textarea>
                        </div>
                    </div>
                    <hr/>
                    <div className="language-section">
                        <div className="language-title">
                            Preffered Language
                        </div>
                        <div className="language-input">
                            <input
                                type="text"
                                name=""
                                id="language"
                                value={this.state.language}
                                onChange={(e:any)=> this.setState({
                                                                    language:e.target.value,
                                                                    updated: true,
                                                                })}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="response-section">
                        <div className="response-rate">
                            <div className="rate-title">
                                Response Rate
                            </div>
                            <div className="rate-input">
                                <input type="text" name="" id="" disabled value={0}/>%
                            </div>
                        </div>
                        <div className="response-time">
                            <div className="time-title">
                                Response Time
                            </div>
                            <div className="time-input">
                                <input type="text" name="" id="" disabled value="Nil"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="update-button">
                        <button onClick={this.handleUpdate.bind(this)} id="upd-btn">UPDATE</button>
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

export default connect(mapStateToProps)(Profile);