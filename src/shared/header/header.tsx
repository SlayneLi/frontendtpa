import React from "react";
import "./header.scss";
import airbnb_black from "../Images/airbnb_black.svg"
import magnifierSeach from "../Images/magnifierSeach.svg"
import LoginModal from "../modal/login/login";
import SignUpModal from "../modal/signup/signUp";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from 'firebase'
import {Observable} from 'rxjs';

class HeaderComponent extends React.Component<any,any>{

    signOut(){
        firebase.auth().signOut(); 
        this.props.onLogout();
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

    handleStream(){
        var observable = Observable.create((observer:any) => {
            observer.next('hi');
        })
        
    }

    checkCache = () =>{
        console.log(localStorage)
        if(localStorage.getItem("email") !== null && localStorage.getItem("email")!== ""){
            this.props.onLogin(localStorage.getItem("email"),localStorage.getItem("firstname"),localStorage.getItem("lastname"))
        }
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
                        <input type="text" name="stays" id="stays" placeholder="Stays" onChange={this.handleStream}/>
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
