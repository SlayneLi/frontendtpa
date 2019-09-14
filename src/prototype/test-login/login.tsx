import React, { Component } from 'react'
import Axios from 'axios';

export default class Login extends Component {

    state = {
        user_data: {
            first_name: "placeholder"
        },
    }

    constructor(props:any){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event:any){
        var a = document.getElementById("i1") as HTMLInputElement;
        var b = document.getElementById("i2") as HTMLInputElement;
        
        Axios.post("http://localhost:3001/login-user",{
            "Email": a.value,
            "Password": b.value
        }).then(res => {
            if(res.data === null){
                console.log("null");
            }
            else{
                console.log("exist");
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">email</label>
                    <input type="text" id="i1"/>
                    <br/>
                    <label htmlFor="">password</label>
                    <input type="text" id="i2"/>
                    <br/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}
