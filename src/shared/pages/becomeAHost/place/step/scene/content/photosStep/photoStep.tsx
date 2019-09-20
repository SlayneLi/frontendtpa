import React from 'react';
import './photoStep.scss'

export default class PhotoStep extends React.Component <any,any>{
    handleNext = ()=>{
        let pii = document.getElementById("photo-image-inp") as HTMLInputElement;
        let cp = document.getElementById("caption-photo") as HTMLInputElement;
        if(pii.value === ""){
            alert("Please input an image!");
            return;
        }
        if(cp.value === ""){
            alert("Please input the image caption!");
            return;
        }
        this.props.next();
    }

    render(){
        return(
            <div className="photo-step">
                <div className="ps-title">
                    Add photo to your listing
                </div>
                <div>
                    Photo help guest imagine staying in your place. You can start with one and add more after you publish
                </div>
                <div>
                    <input type="file" multiple accept="image/png, image/jpeg, image/jpg" id="photo-image-inp"/>
                </div>
                <div>
                    <input type="text" placeholder="Insert Caption here" id="caption-photo"/>
                </div>
                <div className="handle-bt">
                    <div className="handle-step" onClick={this.handleNext}>
                        Next
                    </div>
                </div>
            </div>
        );
}}