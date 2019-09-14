import React, { Component } from 'react'
import Axios from 'axios';

export default class Login extends Component {

    state = {
        user_data: [],
        email: ""
    }

    constructor(props:any){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(event:any){
        var a = document.getElementById("i1") as HTMLInputElement;
        var b = document.getElementById("i2") as HTMLInputElement;
        
        await Axios.post("http://localhost:3001/login-user",{
            "Email": a.value,
            "Password": b.value
        }).then(res => {
            this.setState({
                        user_data: res.data,
                        email: res.data.email
            })
            console.log("data user",this.state.user_data);
            console.log("email",this.state.email);
        });
        // alert(a.value);
        // alert(this.state.email);
        // alert(this.state.email === a.value);
        if(!this.state.user_data)
            alert("empty");
        else
            alert("ada");
        event.preventDefault();
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
