import React from 'react';

export default class GuestBringStep extends React.Component <any,any>{
    checkBasic = () => {
        let d = document.getElementById("describe-input") as HTMLTextAreaElement;
        if(d.value===""){
            alert("Please define what guest should bring!");
            return;
        }
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }

    render(){
        return(
            <div className="guest-bring-step">
                <div className="title-text">
                    What guest should bring into your experience?
                </div>
                <div>
                    <input type="text" id="describe-input" placeholder="Input what the guest should bring..."/>
                </div>
                <div className="handle-bt">
                    <div className="handle-step" onClick={this.handlePrev}>
                        Prev
                    </div>
                    <div className="handle-step" onClick={this.checkBasic}>
                        Next
                    </div>
                </div>
            </div>
        );
}}