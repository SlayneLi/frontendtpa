import React from 'react';
import ReactModal from 'react-modal'
import SavedPlanModal from '../../modal/savedPlan/savedPlanModal';

export default class Save extends React.Component <any,any>{
    
    state={
        saveModal: false,
    }

    openModal = () => {
        if(localStorage.getItem("email") === null){
            alert("You must login first");
            return;
        }
        else{
            this.setState({saveModal:true});
            console.log(this.state);
        }
    }
    
    closeModal = () => {
        this.setState({saveModal:false});
    }

    render(){
        return(
            <React.Fragment>
                <div onClick={this.openModal}  style={{cursor: "pointer"}}>
                    <i className="fas fa-heart"/> Save
                </div>
                <SavedPlanModal id={this.props.id} modalState={this.state.saveModal} closeModal={this.closeModal}/>
            </React.Fragment>
        );
}}