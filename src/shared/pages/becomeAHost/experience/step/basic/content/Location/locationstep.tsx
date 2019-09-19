import React from 'react';

export default class LocationStep extends React.Component <any,any>{
    checkBasic = () =>{
        let ci = document.getElementById("city-input") as HTMLSelectElement
        if(ci.value===""){
            alert("Please input city name!");
            return;
        }
        this.props.next();
    }

    render(){
        return(
            <div className="location-step">
                <div className="title-text">
                    Experience Location City Name
                </div>
                <div>
                    Which city will you host your experience in?
                </div>
                <div>
                    <input type="text" placeholder="Enter City" id="city-input" />
                </div>
                <div onClick={this.checkBasic} className="handle-step">
                    Next
                </div>
            </div>
        );
}}