import React from 'react';
import './bedroomStep.scss'

export default class BedroomStep extends React.Component <any,any>{

    handlePrev = () =>{
        this.props.prev();
    }

    handleNext = () =>{
        let bd = document.getElementById("bed-bs") as HTMLInputElement
        let br = document.getElementById("bedroom-bs") as HTMLInputElement
        
        if(br.value === ""){
            alert("Please input the number of bedroom!");
            return;
        }
        if(bd.value === ""){
            alert("Please input the number of beds!");
            return;
        }
        this.props.next();
    }

    render(){
        return(
            <div className="bedroom-step">
                <div>
                    <div className="bs-title">
                        How many guests can your place accommodate?
                    </div>
                    <div>
                        Check that you have enough beds to accommodate all your guests comfortably.
                    </div>
                </div>
                <div>
                    How many bedrooms can guests use?
                </div>
                <div>
                    <input type="number" min={1} max={50} placeholder="Bedrooms" id="bedroom-bs"/>
                </div>
                <div>
                    How many beds can guests use?
                </div>
                <div>
                    <input type="number" min={1} max={50} placeholder="Beds" id="bed-bs"/>
                </div>
                <div className="handle-bs">
                    <div className="handle-step" onClick={this.handlePrev}>
                        Prev
                    </div>
                    <div className="handle-step" onClick={this.handleNext}>
                        Next
                    </div>
                </div>
            </div>
        );
}}