import React from 'react';
import ReactModal from 'react-modal';
import Axios from 'axios';

export default class SavedPlanModal extends React.Component <any,any>{
    
    savePlan(){
        let planname:any = document.getElementById("name-list");
        let select:any = document.getElementById("privacy");
        if(select.value === "0" || planname.value === "")
            return
        else{
            Axios.post("http://kentang.online:3001/insert-save-plan",{
                "plan_name" : planname.value,
                "place_id" : [this.props.place],
                "experience_id" : [this.props.exp],
                "pic_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1024px-SNice.svg.png",
                "privacy" : select.value,
                "email": this.props.email,
                "start_date" : "",
                "end_date" : "",
            })
        }

    }
    
    render(){
        return(
            <ReactModal
                    isOpen={this.props.modalState}
                >
                    <div className="closeLogo"  onClick={this.props.closeModal}>
                        <i className="fas fa-times "/>
                    </div>
                    <div style={{fontSize: "calc(12px + 1em"}}>
                        Save to list
                    </div>
                    <div className="save-plan-name-title">
                        Name
                    </div>
                    <div>
                        <input type="text" id="name-list" placeholder="Name your list"/>
                    </div>
                    <div>
                        Privacy settings
                    </div>
                    <div>
                        <select id="privacy">
                            <option value="0">Select Privacy</option>
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                        </select>
                    </div>
                    <div style={{cursor:"pointer", padding: "4%", width: "20%", color:"#ffffff",backgroundColor:"#28B9AB" }} onClick={this.savePlan.bind(this)}>
                        Save
                    </div>
            </ReactModal>
        );
}}