import React from 'react';

export default class PricePerPersonStep extends React.Component <any,any> {
    checkBasic = () => {
        let d = document.getElementById("allowed-input") as HTMLTextAreaElement;
        if(d.value===""){
            alert("Please input the price/person!");
            return;
        }
        this.props.next();
    }

    handlePrev = () => {
        this.props.prev();
    }
    
    render(){
        return(
            <div className="price-per-person-step">
                <div className="title-text">
                    Set a price per guest
                </div>
                <div>
                    <input type="number" name="" id="allowed-input" min={1} placeholder="Price / person" step={1000}/>
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