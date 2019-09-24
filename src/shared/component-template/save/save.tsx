import React from 'react';
import SavedPlanModal from '../../modal/savedPlan/savedPlanModal';
import Axios from 'axios';

export default class Save extends React.Component <any,any>{
    
    state={
        saveModal: false,
    }

    openModal = () => {
        if(this.props.save === ""){
            if(localStorage.getItem("email") === null){
                alert("You must login first");
                return;
            }
            else{
                this.setState({saveModal:true});
                console.log(this.state);
            }
        }
        else{
            if(this.props.type === "place"){
                console.log("Place")
                Axios.post("http://kentang.online:3001/remove-save-plan-place/"+this.props.save+"/"+this.props.place+"")
            }
            else{
                console.log("EXP")
                Axios.post("http://kentang.online:3001/remove-save-plan-experience/"+this.props.save+"/"+this.props.exp+"")
            }
            let a =window.location.href;
            window.location.href = a;
        }
    }
    
    closeModal = () => {
        this.setState({saveModal:false});
    }

    render(){
        return(
            <React.Fragment>
                <div onClick={this.openModal}  style={{cursor: "pointer"}} id="save-plan-delete">
                    <i className="fas fa-heart"/> Save
                </div>
                <SavedPlanModal place={this.props.place} exp={this.props.exp} modalState={this.state.saveModal} closeModal={this.closeModal}/>
            </React.Fragment>
        );
}}