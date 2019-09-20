import React from 'react';

export default class ActivitiesRundownStep extends React.Component<any,any> {
    checkBasic = () => {
        let d = document.getElementById("describe-input") as HTMLTextAreaElement;
        if(d.value===""){
            alert("Please describe the rundown!");
            return;
        }
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }

    render(){
        return(
            <div className="activities-rundown-step">
                <div className="title-text">
                    Describe what you will do?
                </div>
                <div>
                    <textarea id="describe-input" cols={30} rows={10} placeholder="Describe the activities rundown"></textarea>
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