import React from 'react';

export default class ExpScheduleStep extends React.Component <any,any> {
    checkBasic = () => {
        let st = document.getElementById("start-time-input") as HTMLInputElement;
        let et = document.getElementById("end-time-input") as HTMLInputElement;

        if(st.value=== ""){
            alert("Please pick a start time!");
            return;
        }
        if(et.value === ""){
            alert("Please pick an end time!");
            return;
        }
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }
    
    render(){
        return(
            <div className="exp-schedule-step">
                <div className="title-text">
                    At what time will you typically host your experience?
                </div>
                <div className="time-input">
                    <div>
                        <input type="time" placeholder="Start Time" id="start-time-input"/>
                    </div>
                    <div>to</div>
                    <div>
                        <input type="time" placeholder="End Time" id="end-time-input"/>
                    </div>
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