import React from 'react';
import './bathroomStep.scss';

export default class BathroomStep extends React.Component<any,any> {
    handleNext = ()=>{
        let bt = document.getElementById("bathroom") as HTMLInputElement;
        if(bt.value === ""){
            alert("Please input bathroom count!");
            return;
        }
        this.props.next();
    }

    handlePrev= ()=>{
        this.props.prev();
    }

    render(){
        return(
            <div className="bathroom-step">
                <div className="bt-bathroom">
                    How many bathrooms?
                </div>
                <div>
                    Count bathrooms that don't have a shower or bathtub as half bathroom.
                </div>
                <div>
                    <input type="number" step={0.5} id="bathroom" placeholder="Bathroom"/>
                </div>
                <div className="handle-bt">
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