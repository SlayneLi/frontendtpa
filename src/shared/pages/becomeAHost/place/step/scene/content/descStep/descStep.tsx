import React from 'react';
import './descStep.scss';

export default class DescStep extends React.Component <any,any>{
    handleNext = ()=>{
        let ds = document.getElementById("desc-input") as HTMLInputElement;
        if(ds.value === ""){
            alert("Please input a description!");
            return;
        }
        this.props.next();
    }

    handlePrev= ()=>{
        this.props.prev();
    }

    render(){
        return(
            <div className="description-step">
                <div className="ds-title">
                    Describe your place to guest
                </div>
                <div>
                    write quick summary of your place. You can highlight what's special about your space, the neighbourhood, and how you'll interact with guest.
                </div>
                <div>
                    <textarea id="desc-input" cols={50} rows={10} maxLength={500} placeholder="Please input desc 500 characters"></textarea>
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