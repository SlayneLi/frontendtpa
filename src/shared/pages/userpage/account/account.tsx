import React, { Component } from 'react'
import {connect} from 'react-redux'
import './account.scss'
import Axios from 'axios'

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
    }

    async componentDidMount(){
        await Axios.get("http://kentang.online:3001/get-user-history/" + this.props.email)
            .then(result =>{
                this.setState({histories: result.data});
            });
        await Axios.get("http://localhost:3001/get-user/" + this.props.email)
            .then(result => {
                this.setState({password: result.data.password});
            });
        console.log(this.state.histories);
        console.log(this.state.password);
    }

    render() {
        return (
            <div className="account-container">
                
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