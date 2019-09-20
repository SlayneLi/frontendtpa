import React from 'react';

export default class MaximumAllowedPersonStep extends React.Component<any,any> {
    checkBasic = () => {
        let d = document.getElementById("allowed-input") as HTMLTextAreaElement;
        if(d.value===""){
            alert("Please input the maximum allowed guest/person!");
            return;
        }
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }
    
    render(){
        return(
            <div className="maximum-allowed-person-step">
                <div className="title-text">
                    Maximum Allowed Person
                </div>
                <div>
                    <input type="number" name="" id="allowed-input" min={1} placeholder="Maximum person"/>
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