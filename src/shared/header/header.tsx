import React from "react";
import "./header.scss";
import airbnb_black from "../Images/airbnb_black.svg"
import magnifierSeach from "../Images/magnifierSeach.svg"
import LoginModal from "../modal/login/login";
import SignUpModal from "../modal/signup/signUp";
import { Link } from "react-router-dom";
// import Link from "react-router-dom";

export default class HeaderComponent extends React.Component<any,any>{
    
    render(){
        return(
            <header>
                <Link to={`/`}>
                    <img src={airbnb_black} alt="mainLogo" className="mainLogo"/>
                </Link>
                <div className="search">
                    <div className="searchBar">
                        <img src={magnifierSeach} alt="searchLogo" className="searchLogo"/>
                        <input type="text" name="stays" id="stays" placeholder="Stays"/>
                    </div>
                </div>
                <div className="menu">
                    <div className="option">
                        <div>Become Host</div>
                        <div>Help</div> 
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
                    </div>
                    <div className="userControll">
                        <SignUpModal/>
                        <LoginModal />
                    </div>
                </div>
            </header>
        )
    }
}