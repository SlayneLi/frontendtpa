import React, { Component } from 'react'
import Axios from 'axios'
import ImageUpload from '../../image-upload/image-upload'
import './profile.scss'

export default class Profile extends Component<any,any> {
    
    constructor(props:any){
        super(props);

        this.changePicture = this.changePicture.bind(this);
    }

    changePicture(){
        console.log("change picture clicked")
    }

    async componentDidMount(){
        await Axios.get(`http://localhost:3001/get-user/${this.props.id}`)
                    .then(res => {
                        console.log(res);
                    })
    }

    render() {
        return (
            <div className="profile-container">
                <div>
                    <div className="display-picture">
                        <div className="pic-title">PROFILE PICTURE</div>
                        <div>
                            <ImageUpload src="https://avatars2.githubusercontent.com/u/30569446?s=400&v=4"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="first-name-section">
                        <div className="first-name-title">
                            First Name
                        </div>
                        <div className="first-name-input">
                            <input type="text" name="" id="" value="Reich"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="last-name-section">
                        <div className="last-name-title">
                            Last Name
                        </div>
                        <div className="last-name-input">
                            <input type="text" name="" id="" value="Chan"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="combo-box-section">
                        <div className="gender-section">
                            <div className="gender-title">
                                Gender
                            </div>
                            <div className="gender-selection">
                                <select name="" id="">
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
                                <select name="" id="">
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
                            <textarea name="" id="">
                            </textarea>
                        </div>
                    </div>
                    <hr/>
                    <div className="language-section">
                        <div className="language-title">
                            Preffered Language
                        </div>
                        <div className="language-input">
                            <input type="text" name="" id=""/>
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
                        <button type="submit">UPDATE</button>
                    </div>
                </div>
            </div>
        )
    }
}
