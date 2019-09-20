import React from 'react';

export default class SelfDescStep extends React.Component <any,any> {
    
    handleNext = () => {
        let d = document.getElementById("describe-input") as HTMLTextAreaElement;
        if(d.value===""){
            alert("Please describe yourself!");
            return;
        }
        this.props.next();
    }
    
    render(){
        return(
            <div className="self-desc-step">
                <div className="title-text">
                    Describe yourself and your qualifications to guests
                </div>
                <div>
                    <textarea id="describe-input" cols={30} rows={10} placeholder="Describe yourself"></textarea>
                </div>
                <div>
                    <div className="handle-step" onClick={this.handleNext}>
                        Next
                    </div>
                </div>
            </div>
        );
}}