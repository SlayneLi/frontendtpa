import React from 'react';

export default class ActivityHeldStep extends React.Component <any,any> {
    checkBasic = () => {
        let d = document.getElementById("describe-input") as HTMLTextAreaElement;
        if(d.value===""){
            alert("Please input the address!");
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
                    Where the activities will be held?
                </div>
                <div>
                    <textarea id="describe-input" cols={30} rows={10} placeholder="Input the where the address..."></textarea>
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