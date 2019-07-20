import React from "react";
import "./header.scss";
import airbnb_black from "../Images/airbnb_black.svg"
import magnifierSeach from "../Images/magnifierSeach.svg"

export default class HeaderComponent extends React.Component{
    render(){
        return(
            <header>
                <img src={airbnb_black} alt="mainLogo" className="mainLogo"/>
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
                    </div>
                    <div className="userControll">
                        <div>Sign Up</div>
                        <div>Login</div>
                    </div>
                </div>
            </header>
        )
    }
}