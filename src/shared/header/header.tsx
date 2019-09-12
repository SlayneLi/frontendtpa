import React from "react";
import "./header.scss";
import airbnb_black from "../Images/airbnb_black.svg"
import magnifierSeach from "../Images/magnifierSeach.svg"
import LoginModal from "../modal/login/login";
import SignUpModal from "../modal/signup/signUp";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from 'firebase'

class HeaderComponent extends React.Component<any,any>{
    
<<<<<<< HEAD
    constructor(props:any){
        super(props);
        this.streamHandle = this.streamHandle.bind(this);
=======
    signOut(){
        firebase.auth().signOut(); 
        this.props.onLogout();
>>>>>>> 84031c57aed38334789c78d10aeea32a9847b8b8
    }

    usercontrol(){
        if(this.props.email !== ""){
            return(
                <React.Fragment>
                    <div>
                        Become a host
                    </div>
                    <div>
                        Hello, {this.props.firstname}
                    </div>
                    <div>
                        <button onClick={() => this.signOut()}>SIGNOUT!!</button>
                    </div>
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    <SignUpModal />
                    <LoginModal />
                </React.Fragment>
            )
        }
    }

<<<<<<< HEAD
    public streamHandle(event:any){

=======

    checkCache = () =>{
        console.log(localStorage)
        if(localStorage.getItem("email") !== null && localStorage.getItem("email")!== ""){
            this.props.onLogin(localStorage.getItem("email"),localStorage.getItem("firstname"),localStorage.getItem("lastname"))
        }
>>>>>>> 84031c57aed38334789c78d10aeea32a9847b8b8
    }

    render(){
        return(
            <header onLoad={this.checkCache}>
                <Link to={`/`}>
                    <img src={airbnb_black} alt="mainLogo" className="mainLogo"/>
                </Link>
                <div className="search">
                    <div className="searchBar">
                        <img src={magnifierSeach} alt="searchLogo" className="searchLogo"/>
                        <input type="text" name="stays" id="stays" placeholder="Stays" onChange={this.streamHandle}/>
                    </div>
                </div>
                <div className="menu">
                    <div><select name="currBar">
                            <option value="usd">USD</option>
                            <option value="jpy">JPY</option>
                            <option value="idr">IDR</option>
                            <option value="sgd">SGD</option>
                            <option value="krw">KRW</option>
                            <option value="thb">THB</option>
                            <option value="cad">CAD</option>
                            <option value="cny">CNY</option>
                            <option value="php">PHP</option>
                            <option value="gbp">GBP</option>
                        </select></div>   
                    {this.usercontrol()}
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        onLogin: (email:string,firstname:string,lastname:string) => dispatch({type: 'LOGIN',email:email, fName:firstname, lName:lastname }),
        onLogout: () => dispatch({type: 'LOGOUT'})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);
