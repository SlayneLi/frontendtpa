import React from 'react';
import './titleStep.scss';

export default class TitleStep extends React.Component<any,any> {
    handleNext = ()=>{
        let tl = document.getElementById("title-input") as HTMLInputElement;
        if(tl.value === ""){
            alert("Please input a title!");
            return;
        }
        this.props.next();
    }

    handlePrev= ()=>{
        this.props.prev();
    }

    render(){
        return(
            <div className="title-step">
                <div className="ts-title">
                    Name your place
                </div>
                <div>
                    Attract guest with a listing title that highlight what makes your place special.
                </div>
                <div>
                    <input type="text" placeholder="Listing title" maxLength={50} id="title-input"/>
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