import React from 'react';

export default class ExperienceNameStep extends React.Component <any,any> {
    checkBasic = () => {
        let d = document.getElementById("describe-input") as HTMLTextAreaElement;
        if(d.value===""){
            alert("Please input the title!");
            return;
        }
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }

    render(){
        return(
            <div className="activity-held-step">
                <div className="title-text">
                    Give your experience a title
                </div>
                <div>
                    <input type="text" id="describe-input" placeholder="What the experience should called..."/>
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